import { Model, Table } from 'sequelize-typescript';
interface ParticipantCreationAttributes {
  email: string;
  password: string;
}
@Table({ tableName: 'participant' })
export default class Participant extends Model<Participant, ParticipantCreationAttributes> {}
