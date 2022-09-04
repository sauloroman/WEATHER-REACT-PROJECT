import { getDate, toCelsius, toFahrenheit } from '../helpers';
import thermometer from '../assets/icons/thermometer.png'
import { useState } from 'react';

const Weather = ({ location }) => {

    const [celsius, setCelsius] = useState(true);

    return (
        <>
            <header className='weather-info__header'>
                <button 
                    onClick={ () => setCelsius(!celsius)}
                    className={`weather-btn bg-${ location.weather }`}>{ celsius ? 'Fahrenheit' : 'Centígrados'}</button>
                <h1>the.weather</h1>
            </header>

            <div className='weather-info__content'>
                <p className='weather-info__temp'>{ celsius ? `${toCelsius( location.temp )}°C` : `${toFahrenheit( location.temp )}°F` }</p>

                <div className='weather-info__location'>
                    <p>{ location.name } | { location.country }</p>
                    <p>{ getDate() }</p>
                </div>

                <div className='weather-info__weather'>
                    <img src={location.icon} alt="" />
                    <p>{ location.weather }</p>
                </div>
            </div>

            <div className='weather-temperatures'>
                <div>   
                    <img src={ thermometer } alt="Thermometer icon" />
                    <p>Max: { celsius ? `${toCelsius( location.temp_max )}°C` : `${toFahrenheit( location.temp_max )}°F` }</p>
                </div>
                <div>
                    <img src={ thermometer } alt="Thermometer icon" />
                    <p>Min: { celsius ? `${toCelsius( location.temp_min )}°C` : `${toFahrenheit( location.temp_min )}°F` }</p>
                </div>
            </div>

        </>
    )
}

export default Weather