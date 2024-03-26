import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';

interface SiteCreationAttributes {
  name: string;
}

@Table({ tableName: 'site' })
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
    allowNull: false,
  })
  @ApiProperty({
    example: 'Ссылка на билд сайта',
    description: 'C:/MegaVitt/builds',
  })
  build_ref: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({
    example: 'Ссылка на сайта',
    description: 'МойСайт.русский',
  })
  link: string;


}
