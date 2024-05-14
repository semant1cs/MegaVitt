import { UUIDV4 } from 'sequelize';
import { DataType, Column, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Event from '../../event/entities/event.entity';

@Table({ tableName: 'participants' })
export default class Participant extends Model<Participant> {
  @Column({
    type: DataType.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false,
    defaultValue: UUIDV4,
  })
  id: string;

  @BelongsTo(() => Event)
  event: Event;

  @ForeignKey(() => Event)
  eventId: string;
}
