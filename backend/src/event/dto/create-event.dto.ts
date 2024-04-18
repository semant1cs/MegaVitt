import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({example: 'Презентация', description: 'Название мероприятия' })
  readonly name: string;
  readonly event_id: string;
  readonly site_id: string;
}
