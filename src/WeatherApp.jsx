import { Spinner, Weather, WeatherBar, WeatherError } from "./components"
import useUserLocation from "./hooks/useUserLocation";

const WeatherApp = () => {

    const { location, onNewLocation, isLoading, error } = useUserLocation();

    return (
        <div className="container center-flex">
           {
                !isLoading ? 
                (
                    error ? 
                    (
                        <WeatherError 
                        onNewLocation = { onNewLocation }
                        />
                    ) : 
                    (
                        <div className={`${ location.weather } weather background-settings`}>
                            <div className="weather-control">
                                <WeatherBar 
                                    onNewLocation = { onNewLocation }
                                    location = { location }/>
                            </div>
                            <div className="weather-info">
                                <Weather location = { location }/>
                            </div>
                         </div>
                    )
                ) : 
                (
                    <Spinner />
                )
           }
        </div>
    )
}

export default WeatherApp