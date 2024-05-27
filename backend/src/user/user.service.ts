import {RoleService} from './../role/role.service';
import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import User from './entities/user.entity';
import {CreateUserDto} from './dto/create-user.dto';
import Role from 'src/role/entities/role.entity';
import {AddRoleDto} from './dto/add-role.dto';
import {Request} from 'express';
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";


const configGetUserEndpoint = {attributes: {exclude: ['password']}, include: ['roles']};

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private roleService: RoleService,
    private _jwtService: JwtService,
    private _configService: ConfigService,
  ) {
  }

  public async create(dto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create(dto);
    const role = await this.roleService.getRoleByName('user');

    if (role === null) throw new HttpException('Роль обычного пользователя не задана (user)', HttpStatus.BAD_REQUEST);

    return this.setRole(user, role);
  }

  private async setRole(user: User, role: Role) {
    await user.$set('roles', [role.id]);
    user.roles = [role];

    return user;
  }

  private async addRole(user: User, role: Role) {
    await user.$add('roles', [role.id]);
    return user;
  }

  public async giveRole(dto: AddRoleDto) {
    const user = await this.findUserByPK(dto.userId);
    const role = await this.roleService.getRoleByName(dto.value);
    if (role && user) return await this.addRole(user, role);
    throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
  }

  public async findUserByPK(id: string) {
    return this.userModel.findByPk(id);
  }

  public async findOneById(id: string, config = configGetUserEndpoint) {
    const user = await this.userModel.findOne(config);
    if (!user) throw new HttpException('Пользователя не существует', 400);
    return user;
  }

  public async findOneByEmail(email: string, options = {include: {all: true}, exclude: ['']}) {
    const user = await this.userModel.findOne({where: {email: email}, ...options.include, ...options.exclude});
    if (user) return user;
  }

  public async findAll(): Promise<User[]> {
    return this.userModel.findAll(configGetUserEndpoint);
  }

  public async updateAvatar(user: User, avatar: string) {
    await user.update({avatar: avatar});
    return user;
  }

  public async deleteUser(id: string) {
    const user = await this.findOneById(id, {attributes: {exclude: ['password', 'roles']}, include: []});
    await this.userModel.destroy({where: {id}});
    return user;
  }

  public async findUser(request: Request): Promise<User> {
    const jwtToken = request.cookies.Authorization;
    const userJwtInfo = await this._jwtService.verify(jwtToken, {secret: this._configService.get('JWT_SECRET_KEY')});
    const userId = userJwtInfo.id;
    const user: User = await this.findUserByPK(userId);
    if (!user) throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
    return user;
  }
}
