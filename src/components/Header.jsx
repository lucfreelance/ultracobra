
import ultraHead from '../img/ultra-head-square.png';
import TarjetaFront from "./TarjetaFront";

const Header = () => {
  return (
    <header>
      <h1>
        <span className="ultra">Ⓤ</span> ultracobra{' '}
        <span className="emoji">🐍</span>
      </h1>          
    <TarjetaFront />
            <div>
            <img
              src={ultraHead}
              alt="Modelo cabecera"
              className="ultra-head"
            />
    <hr className="linea-divisoria-delgada" />
    </div>
    </header> 
  );
};

export default Header;