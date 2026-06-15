# Weather Application

A simple full-stack weather application built using **Node.js**, **Express**, and the **OpenWeather API**. Users can enter a city name and country code to retrieve the current temperature and humidity.

## Features

* Search weather by city and country code.
* Displays:

  * Temperature (in Celsius)
  * Humidity (in percentage)
* Uses OpenWeather Geocoding API to obtain coordinates.
* Uses OpenWeather Current Weather API to fetch weather data.
* Environment variables are used to securely store API keys.

## Project Structure

```
weather/
│
├── app.js
├── package.json
├── package-lock.json
├── .env
├── README.md
│
├── static/
│   ├── index.html
│   └── script.js
│
└── node_modules/
```

## Technologies Used

* Node.js
* Express.js
* JavaScript (ES6+)
* HTML
* OpenWeather API
* dotenv

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd weather
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the project root directory.

```env
OPEN_WEATHER_API_KEY=your_openweather_api_key
```

## Obtaining an OpenWeather API Key

1. Visit https://openweathermap.org/api
2. Create an account or log in.
3. Generate an API key from your account dashboard.
4. Add the generated key to the `.env` file.

## Running the Application

Start the server using:

```bash
node app.js
```

You should see:

```text
Server running on port 5000
```

Open your browser and navigate to:

```
http://localhost:5000
```

## How It Works

1. The user enters a city name and country code.
2. `script.js` sends a request to the Express server.

```text
GET /weather?city=<city>&country=<country>
```

3. The Express server calls the OpenWeather Geocoding API to retrieve latitude and longitude.
4. Using those coordinates, the server calls the OpenWeather Weather API.
5. The server sends temperature and humidity data back to the browser.
6. The browser updates the page dynamically.

## API Endpoints

### GET `/weather`

#### Query Parameters

| Parameter | Description                 |
| --------- | --------------------------- |
| city      | Name of the city            |
| country   | Country code (e.g., IN, US) |

#### Example Request

```
GET /weather?city=New Delhi&country=IN
```

#### Example Response

```json
{
    "temp": 34.28,
    "humidity": 61
}
```



## Future Improvements

* Display weather descriptions and icons.
* Add wind speed information.
* Support forecasts for upcoming days.
* Improve the user interface using CSS.
* Validate user input on the client side.

## Author

Created as a learning project to understand:

* Frontend and backend communication
* Express routing
* Working with third-party APIs
* Environment variables
* Asynchronous JavaScript using `async/await`

```
```
