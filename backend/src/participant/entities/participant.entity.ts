import { UUIDV4 } from 'sequelize';
import { DataType, Column, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Event from '../../event/entities/event.entity';
import { ApiProperty } from '@nestjs/swagger';

interface ParticipantCreationAttributes {
  name: string;
}

@Table({ tableName: 'participants' })
export default class Participant extends Model<Participant, ParticipantCreationAttributes> {
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
    unique: true,
    primaryKey: true,
    allowNull: false,
    defaultValue: UUIDV4,
  })
  @ApiProperty({
    example: '488f36c1-d856-456a-b3bd-6bba5fba64f4',
    description: 'Уникальный айди пользователя',
  })
  @ForeignKey(() => Event)
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  event_id: string;

  @BelongsTo(() => Event)
  event: Event;
}
