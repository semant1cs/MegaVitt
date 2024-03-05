import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import User from './user.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
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
