import { ApiProperty } from '@nestjs/swagger';
import { UUIDV4 } from 'sequelize';
import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import User from 'src/user/entities/user.entity';

interface PresetColorCreationAttributes {
  name: string;
}

@Table({ tableName: 'preset-colors' })
export default class PresetColor extends Model<PresetColor, PresetColorCreationAttributes> {
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
  })
  mainColor: string;

  @Column({
    type: DataType.STRING,
  })
  backgroundColor: string;

  @ForeignKey(() => User)
  userId: string;
}
