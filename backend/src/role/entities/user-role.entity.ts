import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table, ForeignKey } from 'sequelize-typescript';
import Role from './role.entity';
import User from 'src/user/entities/user.entity';
import { UUIDV4 } from 'sequelize';

@Table({ tableName: 'user-roles', createdAt: false, updatedAt: false })
export default class UserRole extends Model<UserRole> {
  @Column({
    type: DataType.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false,
    defaultValue: UUIDV4,
  })
  @ApiProperty({
    example: '488f36c1-d856-456a-b3bd-6bba5fba64f4',
    description: 'Уникальный айди',
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  @ApiProperty({
    example: '488f36c1-d856-456a-b3bd-6bba5fba64f4',
    description: 'ID роли принадлежащей пользователю',
  })
  @ForeignKey(() => Role)
  roleId: string;

  @Column({
    type: DataType.STRING,
  })
  @ApiProperty({
    example: '488f36c1-d856-456a-b3bd-6bba5fba64f4',
    description: 'ID пользователя',
  })
  @ForeignKey(() => User)
  userId: string;
}
