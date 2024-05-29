import { ApiProperty } from '@nestjs/swagger';
import { UUIDV4 } from 'sequelize';
import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import User from 'src/user/entities/user.entity';

interface PresetFontCreationAttributes {
  name: string;
}

@Table({ tableName: 'preset-fonts' })
export default class PresetFont extends Model<PresetFont, PresetFontCreationAttributes> {
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
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fontName: string;

  @ForeignKey(() => User)
  userId: string;
}
