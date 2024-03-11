import React from 'react';
import { motion } from 'framer-motion';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

const WeatherModal = ({ weatherData, onClose }) => {
  return (
    <motion.div
      className="modal"
      initial="hidden"
      animate="visible"
      variants={modalVariants}
    >
      <h2>{weatherData.name} Weather Details</h2>
      <ul>
        <li>Temperature: {weatherData.main.temp} K</li>
        <li>Pressure: {weatherData.main.pressure} hPa</li>
        <li>Humidity: {weatherData.main.humidity}%</li>
        {/* Add more details as needed */}
      </ul>
      <button onClick={onClose}>Close</button>
    </motion.div>
  );
};

export default WeatherModal;
