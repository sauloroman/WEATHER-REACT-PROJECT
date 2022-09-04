import { useEffect } from 'react'

import WeatherSearch from './WeatherSearch';

import { paintBody } from '../helpers';

import image404 from '../assets/images/404.png'

const WeatherError = ({onNewLocation}) => {

    useEffect( () => {
        paintBody('error');
    }, [] );

    return (
        <div className={`weather background-settings`}>
            <div className="error-bar error-control">
                <WeatherSearch 
                    onNewLocation = { onNewLocation }
                    location = { { weather: 'error' } }/>
            </div>
            <div className="error-info">
                <img src={ image404 } alt="Image 404" />
                <h1>Busqueda no encontrada. Prueba con otra ciudad.</h1>
            </div>
        </div>
    )
}

export default WeatherError