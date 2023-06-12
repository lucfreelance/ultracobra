
import UltraHead from '../img/ultra-head-square.png';
import { Link } from 'react-router-dom';
import TarjetaFront from "./TarjetaFront";
import '../App.css';

const Header = () => {
  return (
    <header>
      <h1>
      <Link to="/Pitch"><span className="ultra">Ⓤ</span> ultracobra{' '}
        <span className="emoji">🐍</span></Link>
      </h1>          
    <TarjetaFront />
            <div>
            <img
              src={UltraHead}
              alt="Relax and contact ultracobra services"
              className="ultra-head"
            />
    <hr className="divisory-line" />
    <p>Ultracobra is where you have some fun and a space break</p>
    </div>
    </header> 
  );
};

export default Header;