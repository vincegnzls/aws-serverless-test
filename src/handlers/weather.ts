import { Handler, APIGatewayEvent } from 'aws-lambda';
import { returnResponse } from './return';
import { getWeatherToday } from '../services';

export const handler: Handler = async (event: APIGatewayEvent) => {
  const countryCode = event.queryStringParameters?.countryCode;
  const postalCode = event.queryStringParameters?.postalCode;

  const weatherResponse = await getWeatherToday({ postalCode, countryCode });

  return returnResponse(weatherResponse);
};
