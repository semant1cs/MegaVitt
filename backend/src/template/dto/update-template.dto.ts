import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTemplateDto } from './create-template.dto';

export class UpdateTemplateDto extends PartialType(CreateTemplateDto) {
  @ApiProperty({ example: '<div></div>', description: 'html шаблона' })
  readonly value: string;
}
