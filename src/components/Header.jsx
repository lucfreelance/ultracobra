
import ultraHead from '../img/ultra-head-square.png';
import { Link } from 'react-router-dom';
import TarjetaFront from "./TarjetaFront";

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
              src={ultraHead}
              alt="Relax and contact ultracobra services"
              className="ultra-head"
            />
    <hr className="divisory-line" />
    </div>
    </header> 
  );
};

export default Header;