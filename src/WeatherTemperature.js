import React, { useState } from 'react';
import './WeatherTemperature.css';



export default function WeatherTemperature(props){
    const [unit, setUnit] = useState('celcius');

    let fahrenheitTemp = Math.round((32+9/5*props.celcius));

    function convertFahrenheit(event){
        event.preventDefault();

        setUnit('fahrenheit');
    }

    function convertCelcius(event){
        event.preventDefault();

        setUnit('celcius');
    }

    if(unit === 'celcius'){
    return(
        <div className='WeatherTemperature'>
            <span className='float-left'>
                <span className = 'temperature'>
                    {Math.round(props.celcius)}
                </span>
                <span className='unit'>
                    °C|°<a href='/' onClick={convertFahrenheit}>F</a>
                </span>
            </span>
        </div>
    )
    } 
    if(unit === 'fahrenheit'){
        return(
        <div className='WeatherTemperature'>
            <span className='float-left'>
                <span className = 'temperature'>
                    {fahrenheitTemp}
                </span>
                <span className='unit'>
                    <a href='/' onClick={convertCelcius}>°C</a>|°F
                </span>
            </span>
        </div>
        )
    }
}