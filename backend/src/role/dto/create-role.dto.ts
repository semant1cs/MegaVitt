import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'admin', description: 'Роль пользователя' })
  readonly value: string;

  @ApiProperty({
    example: 'Может добавлять,удалять,изменять пользователей и принадлежащие им сайты',
    description: 'Описание роли',
  })
  readonly description: string;
}
