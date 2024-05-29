import { UUIDV4 } from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

interface TemplateCreationAttributes {
  title: string;
}

@Table({ tableName: 'templates' })
export default class Template extends Model<Template, TemplateCreationAttributes> {
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
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    defaultValue: null,
  })
  value: string;
}
