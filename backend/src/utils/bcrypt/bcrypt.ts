import * as bcrypt from 'bcrypt';

const saltRounds = 10;

export function encodePassword(rawPassword: string) {
  const SALT = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(rawPassword, SALT);
}

export function comparePassword(rawPassword: string, hashedPassword: string) {
  return bcrypt.compareSync(rawPassword, hashedPassword);
}
