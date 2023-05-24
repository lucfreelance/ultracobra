import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import imagenProgramacion from './img/ruta-programacion.jpg';
import imagenContenidos from './img/ruta-de-contenidos.jpg';
import imagenAsistencia from './img/ruta-de-asistencia.jpg';
import imagenArtisticos from './img/ruta-de-la-artistica.jpg';
// import Servicios from './components/Servicios';
// import Contacto from './components/Contacto'
import '@fortawesome/fontawesome-free/css/all.css';

const NewsletterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const mailtoLink = `mailto:ultracobre@gmail.com?subject=Suscripción a Newsletter&body=Correo electrónico: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Ingresa tu email" />
      <button type="submit">Suscríbete al Boletín</button>
    </form>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <div style={{ marginLeft: '20px' }}>
        <header>
        <h1> <span class="highlight">Ⓤ</span> ultracobra <span class="emoji">🐍</span></h1>
          <p className="slogan-prompt">
            Servicios digitales y soluciones vía{' '}
            <a
              href="https://forobeta.com/?ref=179278"
              alt="ultracobra en ForoBeta"
              title="ultracobra en ForoBeta"
              rel="noopener noreferrer"
              target="_blank"
            >
              ForoBeta
            </a>
          </p>
        </header>

        <section id="services" className="grid-container">
          <div className="column">
            <h3 className="intro-title">Potencia tu modo online</h3>
            <p className="intro-description">
              Diseñamos servicios digitales para construir tu proyecto desde cero o impulsar tus emprendimientos en línea.
            </p>
          </div>
          <div className="column">
            <h3 className="intro-title">Mejora tu productividad</h3>
            <p className="intro-description">
            Ofrecemos soluciones basadas en desarrollo web, generación de contenido de calidad, o, si necesitas una mano…
            </p>
          </div>

          <div className="service-intro">
            <div className="intro-text"></div>
          </div>

          <div className="service">
            <img src={imagenContenidos} alt="Contenidos" style={{ width: '250px' }} />
           <h3 className="service-title">CONTENIDOS 📝</h3>
           <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Diseño web en marco de desarrollo"
    title="Diseño web en marco de desarrollo"
    rel="noopener noreferrer"
    target="_blank"
  >
    Diseño web en marco de desarrollo
  </a>
  <br />
  <span>
    Desarrollo de web app, módulos, componentes y otras soluciones de software.</span>
    </p>
    <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Desarrollo de componentes web"
    title="Desarrollo de componentes web"
    rel="noopener noreferrer"
    target="_blank"
  >
    Desarrollo de componentes web
  </a>
  <br />       
  <span>
    Desarrollo de web app, módulos, componentes y otras soluciones de software.</span>
    </p>
    <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Optimización de páginas web"
    title="Optimización de páginas web"
    rel="noopener noreferrer"
    target="_blank"
  >
    Optimización de páginas web
  </a>
  <br />
  <span>
    Favorece la velocidad de tu proyecto para evitar rebotes.</span>
    </p>
    <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Integraciones de Accesibilidad"
    title="Integraciones de Accesibilidad"
    rel="noopener noreferrer"
    target="_blank"
  >
    Integraciones de Accesibilidad
  </a>
  <br />
  <span>
    Que tu web / app llegue a la mayor cantidad de personas posible con Accesibilidad.</span>
    </p>
            <hr className="service-separator" />
            <button className="cta-button">Servicios</button>
          </div>

<div className="service">
  <img src={imagenProgramacion} alt="Programación" style={{ width: '250px' }} />
    <h3 className="service-title">PROGRAMACIÓN 💻</h3>
    <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Diseño web en marco de desarrollo"
    title="Diseño web en marco de desarrollo"
    rel="noopener noreferrer"
    target="_blank"
  >
    Diseño web en marco de desarrollo
  </a>
  <br />
  <span>
    Desarrollo de web app, módulos, componentes y otras soluciones de software.</span>
    </p>
    <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Desarrollo de componentes web"
    title="Desarrollo de componentes web"
    rel="noopener noreferrer"
    target="_blank"
  >
    Desarrollo de componentes web
  </a>
  <br />       
  <span>
    Desarrollo de web app, módulos, componentes y otras soluciones de software.</span>
    </p>
    <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Optimización de páginas web"
    title="Optimización de páginas web"
    rel="noopener noreferrer"
    target="_blank"
  >
    Optimización de páginas web
  </a>
  <br />
  <span>
    Favorece la velocidad de tu proyecto para evitar rebotes.</span>
    </p>
    <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Integraciones de Accesibilidad"
    title="Integraciones de Accesibilidad"
    rel="noopener noreferrer"
    target="_blank"
  >
    Integraciones de Accesibilidad
  </a>
  <br />
  <span>
    Que tu web / app llegue a la mayor cantidad de personas posible con Accesibilidad.</span>
    </p>
  <hr className="service-separator" />
  <button className="cta-button">Servicios</button>
</div>

          <div className="service">
            <img src={imagenAsistencia} alt="Asistencia" style={{ width: '250px' }} />
              <h3 className="service-title">ASISTENCIA 🤝</h3>
              <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Diseño web en marco de desarrollo"
    title="Diseño web en marco de desarrollo"
    rel="noopener noreferrer"
    target="_blank"
  >
    Diseño web en marco de desarrollo
  </a>
  <br />
  <span>
    Desarrollo de web app, módulos, componentes y otras soluciones de software.</span>
    </p>
    <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Desarrollo de componentes web"
    title="Desarrollo de componentes web"
    rel="noopener noreferrer"
    target="_blank"
  >
    Desarrollo de componentes web
  </a>
  <br />       
  <span>
    Desarrollo de web app, módulos, componentes y otras soluciones de software.</span>
    </p>
    <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Optimización de páginas web"
    title="Optimización de páginas web"
    rel="noopener noreferrer"
    target="_blank"
  >
    Optimización de páginas web
  </a>
  <br />
  <span>
    Favorece la velocidad de tu proyecto para evitar rebotes.</span>
    </p>
    <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Integraciones de Accesibilidad"
    title="Integraciones de Accesibilidad"
    rel="noopener noreferrer"
    target="_blank"
  >
    Integraciones de Accesibilidad
  </a>
  <br />
  <span>
    Que tu web / app llegue a la mayor cantidad de personas posible con Accesibilidad.</span>
    </p>
            <hr className="service-separator" />
            <button className="cta-button">Servicios</button>
          </div>

          <div className="service">
            <img src={imagenArtisticos} alt="Artística" style={{ width: '250px' }} />
              <h3 className="service-title">ARTÍSTICA 🎨</h3>
              <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Diseño web en marco de desarrollo"
    title="Diseño web en marco de desarrollo"
    rel="noopener noreferrer"
    target="_blank"
  >
    Diseño web en marco de desarrollo
  </a>
  <br />
  <span>
    Desarrollo de web app, módulos, componentes y otras soluciones de software.</span>
    </p>
    <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Desarrollo de componentes web"
    title="Desarrollo de componentes web"
    rel="noopener noreferrer"
    target="_blank"
  >
    Desarrollo de componentes web
  </a>
  <br />       
  <span>
    Desarrollo de web app, módulos, componentes y otras soluciones de software.</span>
    </p>
    <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Optimización de páginas web"
    title="Optimización de páginas web"
    rel="noopener noreferrer"
    target="_blank"
  >
    Optimización de páginas web
  </a>
  <br />
  <span>
    Favorece la velocidad de tu proyecto para evitar rebotes.</span>
    </p>
    <p className='service-title'>
    {' '}
    <a
    href="/"
    alt="Integraciones de Accesibilidad"
    title="Integraciones de Accesibilidad"
    rel="noopener noreferrer"
    target="_blank"
  >
    Integraciones de Accesibilidad
  </a>
  <br />
  <span>
    Que tu web / app llegue a la mayor cantidad de personas posible con Accesibilidad.</span>
    </p>
            <hr className="service-separator" />
            <button className="cta-button">Productos</button>
          </div>
        </section>

        <footer className="grid-container footer">
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <i className="fab fa-whatsapp"></i> <a href="https://wa.me/573166054533" target="_blank" rel="noopener noreferrer" alt="WhatsApp ultracobra" title="WhatsApp @ultracobra">WhatsApp</a>
            </li>

            <li>
              <i className="fab fa-twitter"></i> <a href="https://twitter.com/cobraultra" target="_blank" rel="noopener noreferrer" alt="Twitter ultracobra" title="Twitter @ultracobra">@cobraultra</a>
            </li>
            <li>
              <i className="fab fa-instagram"></i> <a href="https://instagram.com/ultracobra.es/" target="_blank" rel="noopener noreferrer" alt="Instagram ultracobra" title="Instagram @ultracobra">@ultracobra.es</a>
            </li>
            <li>
              <i className="far fa-envelope"></i> <a href="mailto:ultracobre@gmail.com" target="_blank" rel="noopener noreferrer" alt="Email ultracobra" title="Email @ultracobra">ultracobre@gmail</a>
            </li>
          </ul>

          <p>2023 &copy; Diseñado por <a href="https://github.com/lucfreelance" target="_blank" rel="noopener noreferrer" alt="lucfreelance en GitHub" title="lucfreelance en GitHub" >@lucfreelance</a></p>
          <div className="newsletter-form" style={{ gridColumn: '1 / -1' }}>
            <NewsletterForm /> {/* Agregamos el componente NewsletterForm aquí */}
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
