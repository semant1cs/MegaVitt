import { ApiProperty } from '@nestjs/swagger';
import { UUIDV4 } from 'sequelize';
import { DataType, Column, Model, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Participant from '../../participant/entities/participant.entity';
import Site from '../../site/entities/site.entity';

interface EventCreationAttributes {
  name: string;
}

@Table({ tableName: 'event' })
export default class Event extends Model<Event, EventCreationAttributes> {
  @Column({
    type: DataType.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false,
    defaultValue: UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  @ApiProperty({
    example: 'Презентация',
    description: 'Название мероприятия'
  })
  name: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  @ApiProperty({
    example: 'true',
    description: 'Участники обязательны или нет'
  })
  is_participant_required: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0
  })
  @ApiProperty({
    example: '123',
    description: 'Количество участников',
  })
  participant_count: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0
  })
  @ApiProperty({
    example: '12345',
    description: 'Лимит участников на событии'
  })
  participant_limit: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  @ApiProperty({
    example: 'true',
    description: 'Билеты обязательны или нет',
  })
  is_tickets_required: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0
  })
  @ApiProperty({
    example: '12345',
    description: 'Цена билета',
  })
  ticket_cost: number;

  @HasMany(() => Participant)
  participants: Participant[];

  @ForeignKey(()=> Site)
  site_id: string;

  @BelongsTo(()=> Site)
  site: Site;
}
