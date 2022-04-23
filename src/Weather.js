import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';

export default function Weather(props){
    const [city, setCity]               = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response){
        setWeatherData({
            temperature:    response.data.main.temp,
            description:    response.data.weather[0].description,
            percipitation:  response.data.main.humidity,
            humidity:       response.data.main.humidity,
            wind:           response.data.wind.speed,
            city:           response.data.name,
            icon:           response.data.weather[0].icon,
            date:           new Date(response.data.dt*1000),
            ready:          true
        });
    }
    function search(){
        const APIkey = '503764422e28613a3aa4cb8119955a59';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;

        axios.get(url).then(handleResponse);

    }

    function handleSubmit(event){
        event.preventDefault();
        search();
        // Search for a city
    }

    function hanldeCityChange(event){
        setCity(event.target.value);
    }
    if(weatherData.ready){
        return(
            <div className='Weather'>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-9'>
                    <input 
                        type='search' 
                        placeholder='enter a city...' 
                        className='form-control' 
                        autoFocus='on'
                        onChange={hanldeCityChange}
                        />
                    </div>
                    <div className='col-3'>
                    <input type='submit' value='search' className='btn btn-primary w-100'/>
                    </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} /> 
            </div>)
    } else {
        
        search();
        return "Loading ...";
    }

    
    
}