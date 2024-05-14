import { ApiProperty } from '@nestjs/swagger';
import { UUIDV4 } from 'sequelize';
import Event from 'src/event/entities/event.entity';
import { Column, DataType, Model, Table, ForeignKey } from 'sequelize-typescript';

interface TicketCreationAttributes {}

@Table({ tableName: 'tickets' })
export default class Ticket extends Model<Ticket, TicketCreationAttributes> {
  @Column({
    type: DataType.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false,
    defaultValue: UUIDV4,
  })
  @ApiProperty({
    example: '488f36c1-d856-456a-b3bd-6bba5fba64f4',
    description: 'Уникальный ID билета',
  })
  id: string;

  @Column({
    type: DataType.STRING,
    defaultValue: UUIDV4,
  })
  @ApiProperty({
    example: '488f36c1-d856-456a-b3bd-6bba5fba64f4',
    description: 'ID владельца билета',
  })
  ownerId: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  @ApiProperty({
    example: 400,
    description: 'Стоимость билета',
  })
  cost: number;

  @ForeignKey(() => Event)
  eventId: string;
}
