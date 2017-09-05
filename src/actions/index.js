import axios from 'axios';

const API_KEY = 'be2d2485ab58f703f8a159a987f1459f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
        
    return {
        type: FETCH_WEATHER, //type of string
        payload: request
    }
}