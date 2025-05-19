// src/lambda.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import serverlessExpress from '@vendia/serverless-express';
import { createNestApp } from './main';
import { Express } from 'express';

let cachedServer: ReturnType<typeof serverlessExpress>;

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  if (!cachedServer) {
    const app = await createNestApp();
    const expressApp = app.getHttpAdapter().getInstance() as Express;
    cachedServer = serverlessExpress({ app: expressApp });
  }

  return new Promise((resolve, reject) => {
    cachedServer(event, context, (err, result) => {
      if (err) return reject(err);
      resolve(result as APIGatewayProxyResult);
    });
  });
};
