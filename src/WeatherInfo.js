import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';

export default function WeatherInfo(props){
    console.log(props.data.city);
    

    return (<div className='WeatherInfo'>
    <h1>{props.data.city}</h1>
    <ul>
        <li><FormattedDate date={props.data.date} /></li>
        <span className='text-capitalize'><li>{props.data.description}</li></span>
    </ul>
    <div className='row mt-3'>
        <div className='col-6'>
            <div className='clearfix'>
                <WeatherIcon code={props.data.icon} />
                <WeatherTemperature celcius={props.data.temperature} />
                
            </div>
        </div>
        <div className='col-6'>
            <ul>
                <li>Precipitation: {props.data.percipitation}%</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind}km/h</li>
            </ul>
        </div>
    </div></div>);
}