import { BelongsTo, Column, DataType, ForeignKey, Model, Table, HasOne } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';
import User from '../../user/entities/user.entity';

interface SiteCreationAttributes {
  name: string;
  owner_id: string;
  event_id: string;
  build_ref: string;
  site_id: string
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
    example: 'Ссылка на билд сайта',
    description: 'C:/MegaVitt/builds',
  })
  build_ref: string;




  @Column({
    type: DataType.STRING,
  })
  @ApiProperty({
    example: 'https://my-site.com',
    description: 'Ссылка на сайт',
  })
  link: string;

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  @ApiProperty({
    example: 'files/3a90415a-ee0f-4caa-b9ee-688638cd236f/4d2aaddd-859d-4a40-b5cc-2e7f89cb81fa/preview.png',
    description: 'Путь к картинке сайта'
  })
  preview: string;

  @Column({
    type: DataType.STRING,
  })
  @ApiProperty({
    example: 'Ссылка на сайта',
    description: 'МойСайт.русский',
  })
  event_id: string;
  @Column({
    type: DataType.STRING,
  })
  @ApiProperty({
    example: 'Ссылка на сайта',
    description: 'МойСайт.русский',
  })
  site_id: string;

  @ForeignKey(() => User)
  owner_id: string;

  @BelongsTo(() => User)
  owner: User;
}
