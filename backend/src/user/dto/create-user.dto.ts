import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'admin@example.com', description: 'Почта пользователя' })
  readonly email: string;

  @ApiProperty({ example: 'examplenick', description: 'Никнейм пользователя' })
  readonly username: string;

  @ApiProperty({ example: '12345678', description: 'Пароль пользователя' })
  readonly password: string;
}
