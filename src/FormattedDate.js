import React from 'react';

export default function FormattedDate(response){
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let day = days[response.date.getDay()];
    let hours = response.date.getHours();
    let minutes = response.date.getMinutes();

    if(hours<10){
        hours = `0${hours}`;
    }
    if(minutes<10){
        minutes = `0${minutes}`;
    }

    return <div className='FormattedDate'>{day} {hours}:{minutes}</div>
}