import useForm from "../hooks/useForm";

const WeatherSearch = ({ location, onNewLocation }) => {

    const { city, country, onInputChange, onResetForm } = useForm(
        {
            city: '',
            country: ''
        }
    )

    const onSubmitLocation = event => {

        event.preventDefault();

        if ( [ city, country ].includes('') ) return;

        onNewLocation(country, city);
        onResetForm();
    }

    return (
        <div>
            <h2>Busqueda por ciudad</h2>

            <form 
                onSubmit={ onSubmitLocation }
                className="weather-form">
                <input
                    value={ city }
                    onChange = { onInputChange } 
                    name="city"
                    placeholder="Busca la ciudad"
                    type="text" 
                />

                <select 
                    value={ country }
                    onChange={ onInputChange }
                    name="country"
                    className={`bg-${location.weather}`} placeholder="Busca el país">
                    <option value="">Busca el país</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="PE">Perú</option>
                    <option value="CA">Canadá</option>
                    <option value="GBR">Reino Unido</option>
                </select>

                <button 
                    className={`bg-${location.weather}`}>
                    Buscar
                </button>
            </form>

        </div>
    )
}

export default WeatherSearch