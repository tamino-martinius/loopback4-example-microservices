import {FacadeMicroservice} from './application';
import {ApplicationConfig} from '@loopback/core';

export {FacadeMicroservice};

export async function main(options: ApplicationConfig = {}) {
  const app = new FacadeMicroservice(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`FacadeMicroservice is running at ${url}`);
  return app;
}
