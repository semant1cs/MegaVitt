import { ApiProperty } from '@nestjs/swagger';
import { UUIDV4 } from 'sequelize';
import { DataType, Column, Model, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Participant from '../../participant/entities/participant.entity';
import Site from '../../site/entities/site.entity';
import Ticket from 'src/ticket/entities/ticket.entity';

interface EventCreationAttributes {
  id: string;
  name: string;
}

@Table({ tableName: 'events' })
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
    allowNull: false,
  })
  @ApiProperty({
    example: 'Презентация',
    description: 'Название мероприятия',
  })
  name: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  @ApiProperty({
    example: 'true',
    description: 'Участники обязательны или нет',
  })
  isParticipantRequired: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  @ApiProperty({
    example: '123',
    description: 'Количество участников',
  })
  participantCount: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  @ApiProperty({
    example: '12345',
    description: 'Лимит участников на событии',
  })
  participantLimit: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  @ApiProperty({
    example: 'true',
    description: 'Билеты обязательны или нет',
  })
  isTicketsRequired: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  @ApiProperty({
    example: '12345',
    description: 'Цена билета',
  })
  ticketCost: number;

  @BelongsTo(() => Site)
  site: Site;

  @ForeignKey(() => Site)
  siteId: string;

  @HasMany(() => Participant)
  participants: Participant[];

  @HasMany(() => Ticket)
  tickets: Ticket[];
}
