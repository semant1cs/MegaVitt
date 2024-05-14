import { BelongsTo, Column, DataType, Model, Table, HasOne, ForeignKey } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';
import User from '../../user/entities/user.entity';
import Event from 'src/event/entities/event.entity';

interface SiteCreationAttributes {
  id: string;
  ownerId: string;
  name: string;
  link: string;
}

@Table({ tableName: 'sites' })
export default class Site extends Model<Site, SiteCreationAttributes> {
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
    example: 'МойСайт',
    description: 'Название сайта',
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  @ApiProperty({
    example: 'https://my-site.com',
    description: 'Ссылка на сайт',
  })
  link: string;

  @HasOne(() => Event)
  event: Event;

  @BelongsTo(() => User)
  owner: User;

  @ForeignKey(() => User)
  ownerId: string;
}
