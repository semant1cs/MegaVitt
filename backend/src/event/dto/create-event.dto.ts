import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ example: 'f812df45-a14c-4ae6-aacd-a2f70518bd53', description: 'ID мероприятия' })
  readonly id: string;

  @ApiProperty({ example: 'Презентация', description: 'Название мероприятия' })
  readonly name: string;
}
