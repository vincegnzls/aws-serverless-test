export type GetWeatherParams = {
  countryCode: string;
  postalCode: string;
};

export type WeatherResponse = {
  lon: number;
  lat: number;
  main: string;
  description: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type Response = {
  code: number;
  message: string;
  weather?: WeatherResponse | null;
};
