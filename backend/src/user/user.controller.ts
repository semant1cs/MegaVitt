import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import User from './entities/user.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ZodValidationPipe } from 'src/pipes/validation.pipe';
import { CreateUserDto, createUserSchema } from './user.pipe';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  @UsePipes(new ZodValidationPipe(createUserSchema))
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
