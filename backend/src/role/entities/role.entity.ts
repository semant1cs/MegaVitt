import { ApiProperty } from '@nestjs/swagger';
import { UUIDV4 } from 'sequelize';
import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import User from 'src/user/entities/user.entity';
import UserRole from './user-role.entity';

interface RoleCreationAttributes {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export default class Role extends Model<Role, RoleCreationAttributes> {
  @Column({
    type: DataType.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false,
    defaultValue: UUIDV4,
  })
  @ApiProperty({
    example: '488f36c1-d856-456a-b3bd-6bba5fba64f4',
    description: 'Уникальный айди',
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  @ApiProperty({
    example: 'admin',
    description: 'Роль пользователя',
  })
  value: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({
    example: 'Администратор',
    description: 'Описание роли пользователя',
  })
  description: string;

  @BelongsToMany(() => User, () => UserRole)
  users: User[];
}
