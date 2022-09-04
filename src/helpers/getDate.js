const getDate = () => {

    const myDate = new Date();

    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    }

    const formatDate = myDate.toLocaleDateString("es-MX", options);

    return formatDate[0].toUpperCase() + formatDate.slice( 1, formatDate.length );
    
}

export default getDate