import 'reflect-metadata';
// import path from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { User } from './entities/User';
import { db } from '../config/db';

// Will be true on deployed functions
const prod = process.env.NODE_ENV === 'production';
const typeOrmConfig: PostgresConnectionOptions = {
  name: 'default',
  type: 'postgres',
  host: db().DATABASE_HOST,
  port: db().DATABASE_PORT,
  username: db().DATABASE_USERNAME,
  password: db().DATABASE_PASSWORD,
  database: db().DATABASE_NAME,
  synchronize: true,
  entities: [
    // path.join(__dirname, '/../server/entities/**/', '*.{ts,js}')
    User,
  ],

  // migrations: [rootDir + '/migration/**/*.{js,ts}'],
  // subscribers: [rootDir + '/subscriber/**/*.{js,ts}'],
  // cli: {
  //   entitiesDir: 'entity',
  //   migrationsDir: 'migration',
  //   subscribersDir: 'subscriber',
  // },
  // Production Mode
  ...(!prod && {
    logging: false,
    synchronize: true,
  }),
};

export { typeOrmConfig, prod };
