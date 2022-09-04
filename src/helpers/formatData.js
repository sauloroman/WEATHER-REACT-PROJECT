const formatData = ( data ) => {
    
    const dataObj = {
        name: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        sunrise: ` ${new Date ( data.sys.sunrise * 1000 ).toLocaleTimeString()}`,
        sunset: ` ${new Date ( data.sys.sunset * 1000 ).toLocaleTimeString()}`, 
        wind: data.wind.speed,
        weather: data.weather[0].main,
        icon: ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };

    return dataObj;
}

export default formatData