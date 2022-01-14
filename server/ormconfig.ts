import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// import { User } from './entities/User';

// Will be true on deployed functions
const prod = process.env.NODE_ENV === 'production';
const typeOrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT as string, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  entities: [`${__dirname}/entities/**/*.{js,ts}`],

  // migrations: [rootDir + '/migration/**/*.{js,ts}'],
  // subscribers: [rootDir + '/subscriber/**/*.{js,ts}'],
  cli: {
    entitiesDir: 'entity',
    migrationsDir: 'migration',
    subscribersDir: 'subscriber',
  },
  // Production Mode
  ...(!prod && {
    logging: false,
    synchronize: true,
  }),
};

export { typeOrmConfig, prod };
