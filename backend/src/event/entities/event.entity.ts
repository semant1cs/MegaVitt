import {ApiProperty} from '@nestjs/swagger';
import {UUIDV4} from 'sequelize';
import {DataType, Column, Model, Table} from 'sequelize-typescript';

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
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  @ApiProperty({
    example: 'true',
    description: 'Участники обязательны или нет'
  })
  is_participant_required: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  @ApiProperty({
    example: '123',
    description: 'Количество участников'
  })
  participant_count: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  @ApiProperty({
    example: '12345',
    description: 'Лимит участников на событии'
  })
  participant_limit: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  @ApiProperty({
    example: 'true',
    description: 'Билеты обязательны или нет'
  })
  is_tickets_required: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  @ApiProperty({
    example: '12345',
    description: 'Цена билета'
  })
  ticket_cost: number;

  // @Column({
  //   type: DataType.STRING,
  //   unique: true,
  //   primaryKey: true,
  //   allowNull: false,
  //   defaultValue: UUIDV4,
  // })
  // name: string;
  //
  // @Column({
  //   type: DataType.STRING,
  //   unique: true,
  //   primaryKey: true,
  //   allowNull: false,
  //   defaultValue: UUIDV4,
  // })
  // build_ref: string;
  //
  // @Column({
  //   type: DataType.STRING,
  //   unique: true,
  //   primaryKey: true,
  //   allowNull: false,
  //   defaultValue: UUIDV4,
  // })
  // link: string;
  //
  // @Column({
  //   type: DataType.STRING,
  //   unique: true,
  //   primaryKey: true,
  //   allowNull: false,
  //   defaultValue: UUIDV4,
  // })
  // owner_id: string;
  //
  // @Column({
  //   type: DataType.STRING,
  //   unique: true,
  //   primaryKey: true,
  //   allowNull: false,
  //   defaultValue: UUIDV4,
  // })
  // event: string;
}
