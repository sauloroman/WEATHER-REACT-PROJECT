import humidity from '../assets/icons/humidity.png';
import wind from '../assets/icons/wind.png';
import sunset from '../assets/icons/sunset.png';
import sunrise from '../assets/icons/sunrise.png';

const WeatherInfo = ({location}) => {
    return (
        <div>
            <h2>Detalles del clima</h2>

            <div className="weather-features">
                <ul className="weather-features-list">
                    <li>
                        <img src={ humidity } alt="Humidity icon" />
                        <p>Humedad: { location.humidity }%</p>
                    </li>
                    <li>
                        <img src={ wind } alt="Humidity icon" />
                        <p> Viento: { location.wind } m/s</p>
                    </li>
                    <li>
                        <img src={ sunrise } alt="Humidity icon" />
                        <p>Amanecer: { location.sunrise }</p>
                    </li>
                    <li>
                        <img src={ sunset } alt="Humidity icon" />
                        <p>Anocher: { location.sunset }</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default WeatherInfo