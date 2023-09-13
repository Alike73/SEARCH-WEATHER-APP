
import { useEffect, useState } from "react";
import axios from 'axios';

import WeatherInput from "./WeatherInput";
import weatherLogo from '../Assets/weather.svg';
import WeatherOutput from "./WeatherOutput";

import img1 from '../Assets/thunderstorm-icon.png';
import img2 from '../Assets/drizzle-icon.png';
import img3 from '../Assets/rain-icon.png';
import img4 from '../Assets/snow-icon.png';
import img5 from '../Assets/atmosphere-icon.png';
import img6 from '../Assets/clear-icon.png';
import img7 from '../Assets/clouds-icon.png';


import countries from 'i18n-iso-countries';
import Spinner from "./Spinner/Spinner";
import Clock from "./Clock/Clock";
import Footer from "./Footer/Footer";
import Indicators from "./Indicators/Indicators";
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));


const Weather = () => {
    const [apiData, setApiData] = useState({});
    const [getCity, setGetCity] = useState('New York');
    const [city, setCity] = useState('New York');

    const apiKey = "65f0577ed5cc1f74c4eb270935c58dac";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

    // Using fetch method:
    // useEffect(() => {
    //     fetch(apiUrl)
    //     .then((res) => res.json())
    //     .then((data) => setApiData(data));
    // }, [apiUrl]);

    // Using axios:
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => setApiData(response.data))
            .catch((error) => console.error(error));
    }, [apiUrl]);
    

    console.log(apiData);

    const inputHandler = (event) => {
        setGetCity(event.target.value);
    };


    const submitHandler = () => {
        setCity(getCity);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
        submitHandler();
        }
    };

    // Mapping between weather conditions and icon URLs
    const weatherIcons = {
        Thunderstorm: img1,
        Drizzle: img2,
        Rain: img3,
        Snow: img4,
        Atmosphere: img5,
        Clear: img6,
        Clouds: img7,
    };

    // Get the icon URL based on the weather condition
    const getWeatherIcon = (weather) => {
        if (weather && weather.length > 0) {
            const condition = weather[0].main;
            return weatherIcons[condition] || "default-icon-url";
        }
        return "default-icon-url";
    };

    const kelvinToFahrenheit = (k) => {
        return (k - 273.15).toFixed(2);
    };


    return (
        <div className="weather">
        <header className="weatherHeader">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row g-lg-5 py-5 mainContainer">
                <div className="two rounded-3 my-3"><i className="bi bi-umbrella-fill fs-1"></i><h1>WEATHER TODAY</h1></div>
                <div className="col-md-10 mx-auto col-lg-5 pb-5 border rounded-3 formContainer">
                    <WeatherInput
                        formSubmit={onFormSubmit}
                        submitHandler={submitHandler}
                        inputHandler={inputHandler}
                        handleKeyPress={handleKeyPress}
                        getCity={getCity}
                    />
                    <div className="weatherIconsBox">
                        <img className="weatherLogo mt-4" src={weatherLogo} alt="weatherLogo" width={'100%'} />
                        <img className="weatherIco" src={getWeatherIcon(apiData.weather)} alt="weather-icon" />
                    </div>
                    <Clock timezone = {apiData.timezone} />
                    {apiData.main && apiData.main.temp && (
                        <p className="celsiusMain">
                            {kelvinToFahrenheit(apiData.main.temp)}&deg; C
                        </p>
                        )}

                        <Indicators activeWeatherCondition={apiData.weather && apiData.weather.length > 0 ? apiData.weather[0].main : ''} />
                </div>
                <div className="col-lg-7 text-center text-lg-start">
                    <div className="one rounded-3 my-3"><h2><i className="bi bi-buildings me-2"></i>{apiData.name}</h2></div>
                    {apiData.sys && apiData.sys.country && (
                        <p className="col-lg-10 mx-auto mt-3 country">
                        {countries.getName(apiData.sys.country, 'en', {
                            select: 'official',
                        })}
                        </p>
                    )}

                    {apiData.main ? (
                        <div>
                        <WeatherOutput apiData = {apiData} />
                        </div>
                    ) : (
                        <Spinner />
                    )}
                </div>
            </div>
            </div>
        </header>
        <Footer />
        </div>
    );
};

export default Weather;
