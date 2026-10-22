const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.static('./static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const API_key = process.env.OPEN_WEATHER_API_KEY;
app.get('/weather', async (req, res) => {
    try {
        const city_name = req.query.city || '';
        const country_code = req.query.country || '';
        const state_code = req.query.state ||'';
        const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city_name)},${encodeURIComponent(state_code)},${encodeURIComponent(country_code)}&limit=5&appid=${API_key}`
        );
        console.log("Geocoding response status:", response.status);
        const data1 = await response.json();
        if (data1.length === 0) {
            return res.status(404).json({
                error: 'City not found'
            });
        }

        const lat = data1[0].lat;
        const lon = data1[0].lon;
        const response2 = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
        );
        console.log(response2.status)
        if (!response2.ok) {
            return res.status(response2.status).json({
                error: 'Unable to fetch weather data'
            });
        }

        const data = await response2.json();
        const temp_kelvin = data.main.temp;
        const humidity = data.main.humidity;
        const temp_celsius = Number(
            (temp_kelvin - 273.15).toFixed(2)
        );

        res.json({
            temp: temp_celsius,
            humidity: humidity
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});


