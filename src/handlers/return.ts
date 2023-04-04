import { APIGatewayProxyResult } from 'aws-lambda';
import { Response } from '../@types';

export const returnResponse = (
  responseObject: Response,
): APIGatewayProxyResult => {
  return {
    statusCode: responseObject.code,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(responseObject),
  };
};
