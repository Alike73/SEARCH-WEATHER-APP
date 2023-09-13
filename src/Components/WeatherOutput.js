import countries from 'i18n-iso-countries';
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

const WeatherOutput = ({ apiData }) => {

    const kelvinToFahrenheit = (k) => {
        return (k - 273.15).toFixed(2);
    };

    const handleLinkClick = (event) => {
        event.preventDefault();
        const lat = apiData.coord.lat; // Assuming 'lat' is the property containing the latitude in the API response
        const lon = apiData.coord.lon; // Assuming 'lon' is the property containing the longitude in the API response
        const windyURL = `https://www.windy.com/?${lat},${lon},8`;
        window.open(windyURL, '_blank');
    };

    return (
        <>
            <div className="list-group">
                <a href="#abc" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true" onClick={handleLinkClick}>
                    <i className="bi bi-thermometer-sun myIco"></i>
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                        <h6 className="mb-0">Temperature</h6>
                        <strong className='text-danger windySite'>View on windy.com</strong>
                        </div>
                        <p className="text-nowrap">
                            {kelvinToFahrenheit(apiData.main.temp)}&deg; C
                        </p>
                    </div>
                </a>
                <a href="#abc" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <i className="bi bi-thermometer-half myIco"></i>
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 className="mb-0">Feels like</h6>
                        </div>
                        <p className="text-nowrap">
                            {kelvinToFahrenheit(apiData.main.feels_like)}&deg; C
                        </p>
                    </div>
                </a>
                <a href="#abc" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <i className="bi bi-thermometer myIco"></i>
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 className="mb-0">Minimum</h6>
                        </div>
                        <p className="text-nowrap">
                            {kelvinToFahrenheit(apiData.main.temp_min)}&deg; C
                        </p>
                    </div>
                </a>
                <a href="#abc" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <i className="bi bi-thermometer-high myIco"></i>
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 className="mb-0">Maximum</h6>
                        </div>
                        <p className="text-nowrap">
                            {kelvinToFahrenheit(apiData.main.temp_max)}&deg; C
                        </p>
                    </div>
                </a>
                <a href="#abc" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <i className="bi bi-umbrella-fill myIco"></i>
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 className="mb-0">
                                {apiData.weather[0].description}
                            </h6>
                        </div>
                        <p className="text-nowrap">
                            <img
                                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                                alt="weather status icon"
                                className="weather-icon"
                                width={32}
                                height={32}
                            />
                        </p>
                    </div>
                </a>
                <a href="#abc" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <i className="bi bi-wind myIco"></i>
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 className="mb-0">Wind speed</h6>
                        </div>
                        <p className="text-nowrap">
                        {apiData.wind.speed} m/s
                        </p>
                    </div>
                </a>
                <a href="#abc" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <i className="bi bi-moisture myIco"></i>
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 className="mb-0">Humidity</h6>
                        </div>
                        <p className="text-nowrap">
                        {apiData.main.humidity} %
                        </p>
                    </div>
                </a>
                <a href="#abc" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <i className="bi bi-thermometer-half myIco"></i>
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 className="mb-0">Pressure</h6>
                        </div>
                        <p className="text-nowrap">
                        {apiData.main.pressure} hPa
                        </p>
                    </div>
                </a>
            </div>
        </>
    )
}
export default WeatherOutput;