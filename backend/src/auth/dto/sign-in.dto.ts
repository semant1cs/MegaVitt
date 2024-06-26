import { ApiProperty } from '@nestjs/swagger';
import { UserLoginRequestSchema } from 'zod-contracts';
import { createZodDto } from 'nestjs-zod';

export class SignInDto extends createZodDto(UserLoginRequestSchema) {
  @ApiProperty({ example: 'admin@example.com', description: 'Email пользователя' })
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'admin@example.com' })
  readonly password: string;
}
