import { formatData, paintBody } from "./";

const getWeather = async url => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const finalData = formatData( data );
        paintBody( finalData.weather );

        return finalData;
    } catch ( error ) {
        return undefined;
    }
}

export default getWeather