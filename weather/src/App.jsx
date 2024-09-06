import React, { useEffect, useState } from "react";
import feather from "feather-icons";
import "./App.css";

const popularCities = [
  "Karachi",
  "Tokyo",
  "New York",
  "Paris",
  "London",
  "Shanghai",
  "Los Angeles",
  "Beijing",
  "Mumbai",
  "Moscow",
  "Hong Kong",
  "São Paulo",
  "Dubai",
  "Singapore",
  "Bangkok",
  "Istanbul",
  "Sydney",
  "Seoul",
  "Mexico City",
  "Berlin",
  "Madrid",
];

const App = () => {
  React.useEffect(() => {
    feather.replace();
  }, []);

  const [chosen, setChosen] = useState(popularCities[0]);
  const [weatherData, setWeatherData] = useState(null);

  if (weatherData) {
    var { main, sys, weather, name } = weatherData;
  }

  var temp = Math.round(main?.temp - 273.15);

  const handleCityChange = (e) => {
    setChosen(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${chosen}&appid=1f136667cfcdb418bf8b7a4c5a542f00`
    )
      .then((res) => res.json())
      .then((res) => {
        setWeatherData(res);
      })
      .catch((error) => console.error("Error:", error));
  }, [chosen]);

  return (
    <div className="container">
      <div className="weather-side">
        <div className="weather-gradient"></div>
        <div className="date-container">
          <i className="location-icon" data-feather="map-pin"></i>
          <span className="location">
            {weatherData && name}, {weatherData && sys.country}
          </span>
        </div>

        <div className="weather-container">
          <i className="weather-icon" data-feather="sun"></i>
          <h1 className="weather-temp">{temp}°C</h1>
          <h3 className="weather-desc">Sunny</h3>
        </div>
      </div>

      <div className="info-side">
        <div className="today-info-container">
          <div className="today-info">
            <div className="precipitation">
              <span className="title mx-auto">PRESSURE</span>
              <span className="ml-2">{weatherData && main?.pressure} hPa</span>
              <div className="clear"></div>
            </div>
            <div className="humidity">
              <span className="title">HUMIDITY</span>
              <span className="ml-2">{weatherData && main?.humidity}%</span>
              <div className="clear"></div>
            </div>
          </div>
        </div>

        <div className="location-container">
          <select
            value={chosen}
            onChange={handleCityChange}
            className="location-button bg-black text-zinc-50"
          >
            {popularCities.map((data, ind) => (
              <option key={ind} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default App;
