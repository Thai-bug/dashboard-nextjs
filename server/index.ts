// import 'reflect-metadata';
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import dotenv from 'dotenv';
dotenv.config();
import { createConnection } from 'typeorm';

import { typeOrmConfig } from './ormconfig';

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const connection = await createConnection(typeOrmConfig);
  await connection.synchronize();

  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  }).listen(port);

  // tslint:disable-next-line:no-console
  console.log(
    `> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV
    }`,
  );
});
