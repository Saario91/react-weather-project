import React, { useState } from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';
import axios from 'axios';

export default function WeatherForecast(props){
    const [temps, setTemps] = useState({});
    function handleResponse(response){
        console.log(response.data);
        setTemps(
            {
                min: response.data.daily[0].temp.min,
                max: response.data.daily[0].temp.max
            }
        )

    }
    const APIkey = '503764422e28613a3aa4cb8119955a59';
    let lat = props.lat;
    let lon = props.lon;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;

    axios.get(apiURL).then(handleResponse);
    return(
        <div className='WeatherForecast'>
            <div className='row'>
                <div className='col'>
                    <div className='WeatherForecast-day'>Thu</div>
                    
                    <WeatherIcon code='10d' size={36} />
                    
                    <div className='WeatherForecast-temp'>
                        <span className='WeatherForecast-temp-max'>{Math.round(temps.max)}°</span>
                        <span className='WeatherForecast-temp-min'>{Math.round(temps.min)}°</span>
                    </div>
                </div>
            </div>
        </div>
        )
}