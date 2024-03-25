import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'admin@example.com', description: 'Email пользователя' })
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'admin@example.com' })
  readonly password: string;
}
