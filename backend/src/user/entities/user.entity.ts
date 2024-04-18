import { ApiProperty } from '@nestjs/swagger';
import { UUIDV4 } from 'sequelize';
import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import Role from 'src/role/entities/role.entity';
import UserRole from 'src/role/entities/user-role.entity';

interface UserCreationAttributes {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export default class User extends Model<User, UserCreationAttributes> {
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
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  @ApiProperty({
    example: 'user@example.com',
    description: 'Email пользователя',
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({
    example: 'username',
    description: 'Никнейм пользователя',
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({
    example: '12345678asd',
    description: 'Пароль пользователя',
  })
  password: string;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];
}
