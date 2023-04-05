import { Response, GetWeatherParams } from '../@types';
import axios from 'axios';

export const getWeatherToday = async (
  payload: GetWeatherParams,
): Promise<Response> => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${payload.postalCode},${payload.countryCode}&appid=${process.env.API_KEY}`,
    );

    if (res.status === 200) {
      const data = res.data;
      const weather = {
        lon: data.coord.lon,
        lat: data.coord.lat,
        main: data.weather.main,
        description: data.weather.description,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      };

      return {
        code: res.status,
        message: 'success',
        weather,
      };
    }
  } catch (e) {
    return {
      code: parseInt(e.response.data.cod),
      message: e.response.data.message,
    };
  }

  return {
    code: 400,
    message: 'An error has occured',
  };
};
