import { useState } from 'react';
import { motion } from 'framer-motion';
import UltraHead1 from '../img/ultra-head-square.png';
import UltraHead2 from '../img/ultra-head-square-alt.png';
import { Link } from 'react-router-dom';
import TarjetaFront from './TarjetaFront';
import '../App.css';

const Header = () => {
  const [isTransitioned, setIsTransitioned] = useState(false);

  const toggleTransition = () => {
    setIsTransitioned(!isTransitioned);
  };

  const transitionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <header>
      <h1>
        <Link to="/Pitch">
          <span className="ultra">Ⓤ</span> ultracobra{' '}
          <span className="emoji">🐍</span>
        </Link>
      </h1>
      <TarjetaFront />
      <div>
        <motion.img
          src={isTransitioned ? UltraHead2 : UltraHead1}
          alt="Relax and contact ultracobra services"
          className={`ultra-head ${isTransitioned ? 'transitioned' : ''}`}
          onClick={toggleTransition}
          initial="initial"
          animate="animate"
          variants={transitionVariants}
          transition={{ duration: isTransitioned ? 2 : 4 }}
        />
        <hr className="divisory-line" />
        <p>Ultracobra is where you have some fun and a space break</p>
      </div>
    </header>
  );
};

export default Header;
