import { Weather, WeatherInfo, WeatherSearch } from "./components"

const WeatherApp = () => {
 
    return (
        <div className="weather">
            <div>
                <Weather />
            </div>
            <div>
                <WeatherSearch />
                <WeatherInfo />
            </div>
        </div>
    )
}

export default WeatherApp