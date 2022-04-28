import React, { useState, useEffect } from 'react';
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';



export default function WeatherForecast(props){

    const [loaded, setLoaded] = useState(true);
    const [forecastData, setForecastData] = useState({});


    /* Use effect implementation
    useEffect(() => {
        setLoaded(false);
    }, [props.lat])
    */
   
    function handleResponse(response){
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

    // INput for WeatherForecastDay 

    /*
      if(index<6){
                        return(
                            <div className='col' key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                    }                  
    */

    if(loaded){
        return(
            <div className='WeatherForecast'>
                <div className='row'>
                    <div className='col'>
                        <WeatherForecastDay data={forecastData[0]} />
                    </div>
                    <div className='col'>
                        <WeatherForecastDay data={forecastData[1]} />
                    </div>
                    <div className='col'>
                        <WeatherForecastDay data={forecastData[2]} />
                    </div>
                    <div className='col'>
                        <WeatherForecastDay data={forecastData[3]} />
                    </div>
                    <div className='col'>
                        <WeatherForecastDay data={forecastData[4]} />
                    </div>
                </div>
            </div>
            )
    }
    else{


        return 'Loading ...'
    }

}