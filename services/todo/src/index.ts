import {TodoMicroservice} from './application';
import {ApplicationConfig} from '@loopback/core';

export {TodoMicroservice};

export async function main(options: ApplicationConfig = {}) {
  const app = new TodoMicroservice(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`TodoMicroservice is running at ${url}`);
  return app;
}
