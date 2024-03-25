import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({ example: 'admin@example.com', description: 'Email пользователя' })
  readonly email: string;

  @ApiProperty({ example: 'admin@example.com', description: 'Email пользователя' })
  readonly username: string;

  @ApiProperty({ example: '12345678', description: 'admin@example.com' })
  readonly password: string;
}
