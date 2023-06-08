
import UltraHead from '../img/ultra-head-square.png';
import { Link } from 'react-router-dom';
import TarjetaFront from "./TarjetaFront";
import '../App.css';

const Header = () => {
  return (
    <header>
      <h1>
      <Link to="/"><span className="ultra">Ⓤ</span> ultracobra{' '}
        <span className="emoji">🐍</span></Link>
      </h1>          
    <TarjetaFront />
            <div>
            <img
              src={UltraHead}
              alt="Relax and comfort"
              className="ultra-head"
            />
    <hr className="divisory-line" />
    </div>
    </header> 
  );
};

export default Header;
