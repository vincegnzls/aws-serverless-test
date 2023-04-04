# Weather API

I created a basic API that fetches today's weather using `https://api.openweathermap.org`

## Main Files:

1. serverless.yml - Added an http `GET` event `/weather`, which can be accessed locally as `http://localhost:3000/development/weather?countryCode=PH&postalCode=1234`
2. src/handlers/weather.ts - Receives the request with input parameters `countryCode` and `postalCode`, calls the `getWeather` service, and returns a `Response` type, please see below for examples

Sample Success Response:

```json
{
  "code": 200,
  "message": "success",
  "weather": {
    "lon": 120.75,
    "lat": 15.05,
    "temp": 306.01,
    "feels_like": 308.1,
    "temp_min": 306.01,
    "temp_max": 306.01,
    "pressure": 1008,
    "humidity": 46
  }
}
```

Sample Error Response:

```json
{
  "code": "404",
  "message": "city not found"
}
```

3. src/services/weather.ts - Service file for fetching the data from openweathermap. It uses the `/weather` endpoint from openwaether map to fetch the weather today. I added error handling to return error response and message from the api
4. types - Folder containing the different types I created and used for the API

## Notes:

- I used an env file to store `API_KEY` variable to make it more secure and not publicly reveal the api key used

### Starting and running the application

1. Install dependencies

```bash
yarn install or npm install
```

2. Install serverless globally to start local offline serverless app

```bash
npm install -g serverless
```

3. Create `.env` file in root directory

```
API_KEY=<your-api-key>
```

3. Run app locally

```bash
serverless offline start
```

Sample Endpoint: `http://localhost:3000/development/weather?countryCode=au&postalCode=2000`
