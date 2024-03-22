import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEventDto } from './create-event.dto';
export class UpdateEventDto extends PartialType(CreateEventDto) {
  @ApiProperty({
    example: 'Презентация',
    description: 'Название мероприятия',
  })
  readonly name: string;

  @ApiProperty({
    example: 'true',
    description: 'Участники обязательны или нет',
  })
  readonly is_participant_required: boolean;

  @ApiProperty({
    example: '123',
    description: 'Количество участников',
  })
  readonly participant_count: number;

  @ApiProperty({
    example: '12345',
    description: 'Лимит участников на событии',
  })
  readonly participant_limit: number;

  @ApiProperty({
    example: 'true',
    description: 'Билеты обязательны или нет',
  })
  readonly is_tickets_required: boolean;

  @ApiProperty({
    example: '12345',
    description: 'Цена билета',
  })
  readonly ticket_cost: number;
}
