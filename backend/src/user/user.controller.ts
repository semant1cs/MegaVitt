import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import User from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/decorators/public.decorator';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  @Public()
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get(':id')
  findUserById(@Param('id') id: string): Promise<User> {
    return this.userService.findOneById(id);
  }

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
