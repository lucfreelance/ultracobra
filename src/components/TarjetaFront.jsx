// import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { motion } from 'framer-motion';

const TarjetaFront = () => {
  return (
    <div className="tarjeta-container">
      <motion.div
        className="tarjeta-front"
        initial={{ opacity: 0, y: -90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Link to="../pages/Services" title="Ultracobra services">
          <p>Digital services and assistances</p>
        </Link>
      </motion.div>
    </div>
  );
};

export default TarjetaFront;