import { ApiProperty } from '@nestjs/swagger';
import { UserRegisterRequestSchema } from 'contracts';
import { createZodDto } from 'nestjs-zod';

export class SignUpDto extends createZodDto(UserRegisterRequestSchema) {
  @ApiProperty({ example: 'admin@example.com', description: 'Email пользователя' })
  readonly email: string;

  @ApiProperty({ example: 'admin@example.com', description: 'Email пользователя' })
  readonly username: string;

  @ApiProperty({ example: '12345678', description: 'admin@example.com' })
  readonly password: string;
}
