import React, { useState } from 'react';
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';



export default function WeatherForecast(props){

    const [loaded, setLoaded] = useState(true);
    const [forecastData, setForecastData] = useState({});


    function handleResponse(response){
        console.log('Handling API call for forecast weather');
        console.log(response.data);
        setForecastData(response.data.daily);
        setLoaded(true);

    }

    const APIkey = '503764422e28613a3aa4cb8119955a59';
    let lat = props.lat;
    let lon = props.lon;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;
    //axios.get(apiURL).then(handleResponse);

    console.log('Performing API call for forecast');
    console.log(apiURL);

    // INput for WeatherForecastDay data={forecastData[0]}

    if(loaded){
        return(
            <div className='WeatherForecast'>
                <div className='row'>
                    <div className='col'>
                        <WeatherForecastDay />
                        
                    </div>
                </div>
            </div>
            )
    }
    else{


        return 'Loading ...'
    }

}