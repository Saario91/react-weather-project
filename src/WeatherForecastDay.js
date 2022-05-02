import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props){
    console.log(props.data)
    function day(){
        //let date = new Date(props.data.dt*1000);
        let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

        return days[3];

    }
    return( 
    <div className='WeatherForecastDay'>
        <div className='WeatherForecast-day'>{day()}</div>
                        
        <WeatherIcon code={props.data.weather[0].description} size={32} />
                        
        <div className='WeatherForecast-temp'>
            <span className='WeatherForecast-temp-max'>{Math.round(props.data.main.temp.max)}°</span>
            <span className='WeatherForecast-temp-min'>{Math.round(props.data.main.temp.min)}°</span>
        </div>
    </div>
    )
}