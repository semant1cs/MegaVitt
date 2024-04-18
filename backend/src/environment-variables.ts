import z from 'zod';

export class EnvironmentVariables {
  APP_PORT: z.ZodNumber;
  NODE_ENV: z.ZodString;
  POSTGRES_HOST: z.ZodString;
  POSTGRES_PORT: z.ZodNumber;
  POSTGRES_USERNAME: z.ZodString;
  POSTGRES_PASSWORD: z.ZodString;
  POSTGRES_DB: z.ZodString;
  PGADMIN_PORT: z.ZodNumber;
  PGADMIN_DEFAULT_EMAIL: z.ZodString;
  PGADMIN_DEFAULT_PASSWORD: z.ZodString;
  JWT_SECRET_KEY: z.ZodString;
  FRONT_APP_PORT: z.ZodNumber;
}
