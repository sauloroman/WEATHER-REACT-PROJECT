import { useState, useEffect} from "react"
import getWeather from "../helpers/getWeather";

const useUserLocation = () => {
    
    const [location, setLocation] = useState({});
    const [ isLoading, setIsLoading ] = useState( true );
    const [ error, setError ] = useState( false );

    const onNewLocation = async (country, city) => {
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=c9a246eeda465e60f3c43e685563d9bc`;

        setError( false );
        setIsLoading ( true );
        
        const finalData = await getWeather( url );

        if ( finalData ) {
            setLocation( finalData );
        } else {
            setError( true );
        }

        setIsLoading ( false );
        
    }

    useEffect( () => {
    
        navigator.geolocation.getCurrentPosition( async ({ coords }) => {
            
            const latitude = coords.latitude;
            const longitude = coords.longitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c9a246eeda465e60f3c43e685563d9bc`;

            setIsLoading ( true );

            const finalData = await getWeather( url );
            
            setLocation( finalData );
            setIsLoading ( false );

        })
        
    }, [] );

    return {
        location, 
        isLoading,
        onNewLocation,
        error
    }

}

export default useUserLocation