import { getWeatherToday } from '../services';

describe('getWeatherToday', () => {
  it('returns a successful response with weather data when given valid input', async () => {
    const postalCode = '12345';
    const countryCode = 'US';

    const response = await getWeatherToday({ postalCode, countryCode });

    expect(response.code).toBe(200);
    expect(response.message).toBe('success');
    expect(response.weather).toHaveProperty('lon');
    expect(response.weather).toHaveProperty('lat');
    expect(response.weather).toHaveProperty('main');
    expect(response.weather).toHaveProperty('description');
    expect(response.weather).toHaveProperty('temp');
    expect(response.weather).toHaveProperty('feels_like');
    expect(response.weather).toHaveProperty('temp_min');
    expect(response.weather).toHaveProperty('temp_max');
    expect(response.weather).toHaveProperty('pressure');
    expect(response.weather).toHaveProperty('humidity');
  });

  it('returns an error response when given invalid input', async () => {
    const postalCode = 'invalidPostalCode';
    const countryCode = 'invalidCountryCode';

    const response = await getWeatherToday({ postalCode, countryCode });

    expect(response.code).not.toBe(200);
    expect(response.message).not.toBe('success');
    expect(response.weather).toBeUndefined();
  });
});
