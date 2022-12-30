import React from 'react'

export default function Main({ condition, temperature, location,humidity,wind_kph, onSearchButtonClick }){
    console.log("Condition", condition)
    return <div className='main'>
        <button className='btn-search' onClick={onSearchButtonClick}>
            <img src="/icons/search.png" alt="Search" />
        </button>
        <div className="temperature">{temperature}°C
        <div className='humdity'>{humidity}</div>
        </div>
        <div className="location-info">
            <div className='location'>
                <div className='wind_kph'>{wind_kph} KM/hr</div>
                <div className='condition'>{condition.text}</div>
                <div className='location-title'>{location.name}, {location.country}</div>
            </div>
            <div className='icon'>
                <img src={condition.icon} alt="Weather icon" />
            </div>
        </div>
    </div>
}