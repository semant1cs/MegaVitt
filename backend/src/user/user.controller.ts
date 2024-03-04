import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import User from './user.model';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

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
  @UseGuards(LocalAuthGuard)
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
