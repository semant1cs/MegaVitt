import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { AddRoleDto } from 'src/user/dto/add-role.dto';
import { Public } from 'src/utils/access';

@Controller('roles')
@ApiTags('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @Public()
  createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get('/:value')
  @ApiBearerAuth()
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByName(value);
  }
}
