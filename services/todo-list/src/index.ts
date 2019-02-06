import {TodoListMicroservice} from './application';
import {ApplicationConfig} from '@loopback/core';

export {TodoListMicroservice};

export async function main(options: ApplicationConfig = {}) {
  const app = new TodoListMicroservice(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`TodoListMicroservice is running at ${url}`);
  return app;
}
