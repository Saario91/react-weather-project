import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props){
    function day(){
        //let date = new Date(props.data.dt(1000));
        let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

        return days[5];

    }
    return( 
    <div className='WeatherForecastDay'>
        <div className='WeatherForecast-day'>{day()}</div>
                        
        <WeatherIcon code='01d' size={32} />
                        
        <div className='WeatherForecast-temp'>
            <span className='WeatherForecast-temp-max'>{Math.round(23)}°</span>
            <span className='WeatherForecast-temp-min'>{Math.round(15)}°</span>
        </div>
    </div>
    )
}