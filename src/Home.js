import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherModal from './WeatherModal';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeather();
  }, []);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <h1>Your Weather Dashboard</h1>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <button onClick={handleOpenModal}>Show Details</button>
          {showModal && <WeatherModal weatherData={weatherData} onClose={handleCloseModal} />}
        </div>
      )}
    </div>
  );
};

export default Home;
