import {WeatherSearch, WeatherInfo} from './'

const WeatherBar = ({location, onNewLocation}) => {
    return (
        <>
            <WeatherSearch 
                onNewLocation = { onNewLocation }
                location={location} />
            <WeatherInfo location={location}/>
        </>
    )
}

export default WeatherBar