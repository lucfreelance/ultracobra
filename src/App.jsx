import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Footer from './components/Footer';
import imagenProgramacion from './img/ruta-programacion.jpg';
import imagenContenidos from './img/ruta-de-contenidos.jpg';
import imagenAsistencia from './img/ruta-de-asistencia.jpg';
// import imagenArtisticos from './img/ruta-de-la-artistica.png';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaBootstrap } from 'react-icons/fa';

export const App = () => {
  return (
    <BrowserRouter>
      <div style={{ marginLeft: '20px' }}>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>ultracobra Ⓤ Servicios digitales y soluciones 🐍 vía ForoBeta</title>
          <meta name="description" content="Servicios digitales y soluciones en: Contenidos + Programación + Asistencia + Arte digital. Estamos en web, foros, social y pronto más!" />
          <meta property="og:image" content="https://i.imgur.com/cCphed4.png" />
        </Helmet>
        <header>
          <h1>
            <span className="ultra">Ⓤ</span> ultracobra{' '}
            <span className="emoji">🐍</span>
          </h1>
          <p className="slogan-prompt">
            Servicios digitales y soluciones vía{' '}
            <a
              href="https://forobeta.com/?ref=179278"
              alt="ultracobra en ForoBeta"
              title="ultracobra en ForoBeta"
              // rel="noopener noreferrer"
              // target="_blank"
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

          <div className="service">
            <img src={imagenContenidos} alt="Contenidos" style={{ width: '250px' }} />
            <h3 className="service-title">CONTENIDOS 📝</h3>
            <p className="service-description">
              <a
                href="https://forobeta.com/temas/con-excelente-calidad-en-redaccion-y-algo-mas.626791/"
                alt="Post Pack temático redacciones desde 1000 palabras"
                title="Post Pack temático"
                rel="noopener noreferrer"
                target="_blank"
              >
                Redacciones desde 1000 palabras #PostPack
              </a>
              <br />
<span>
                Dirigimos a la primera oferta del foro como redactor de contenido atractivo y de calidad. El tema está [cerrado], la oferta ha sido relanzada. 
              </span>
            </p>
            <p className="service-description">
              <a
                href="https://forobeta.com/temas/traductor-espanol-ingles-ingles-portugues-portugues-espanol-a-tu-servicio-24-7-365.660572/"
                alt="Traducciones ES-EN-ES"
                title="Traducciones ES-EN-ES"
                rel="noopener noreferrer"
                target="_blank"
              >
                Traducciones Español / Inglés / Español
              </a>
              <br />
<span>
                Dirigimos a la segunda oferta del foro como traductor Inglés a Español y Español a Inglés. El tema está [cerrado], la oferta ha sido relanzada.
              </span>
            </p>
            <p className="service-description">
              <a
                href="/"
                alt="Creación y actualización de blogs"
                title="Creación y actualización de blogs"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Creación y actualización de blogs
              </a>
              <br />
<span>
                Ofrecemos contenido atractivo y de calidad para blogs, redes sociales, sitios web. Construimos tu blog desde cero para WordPress, otros CMS, blogs sin base de datos.
              </span>
            </p>
            {/* <hr className="service-separator" /> */}
            
          </div>

          <div className="service">
            <img src={imagenProgramacion} alt="Programación" style={{ width: '250px' }} />
            <h3 className="service-title">PROGRAMACIÓN 💻</h3>
            <p className="service-description">
              <a
                href="/"
                alt="Diseño web en marco de desarrollo"
                title="Diseño web en marco de desarrollo"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Diseño de sitios web estáticos [con o sin frameworks]
              </a>
              <br />
<span>
              Crea una presencia en línea impactante con el desarrollo de sitios desarrollados con marcos de desarrollo [frameworks], o si prefieres tipo vainilla o con CMS: Lo que mejor se adapte a tu proyecto
              </span>
            </p>
            <p className="service-description">
              <a
                href="/"
                alt="Optimización de páginas web"
                title="Optimización de páginas web"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Optimización de webs y apps
              </a>
              <br />
<span>
              Impulsa el rendimiento de tu proyecto al mejorar la velocidad de carga, experiencia del usuario, y evitarás rebotes por cargas iniciales lentas.
              </span>
            </p>
            <p className="service-description">
              <a
                href="/"
                alt="Integraciones de Accesibilidad"
                title="Integraciones de Accesibilidad"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Integraciones de Accesibilidad Web
              </a>
              <br />
<span>
              La Accesibilidad Web se enfoca en hacer que un sitio web o app sea fácilmente usable por personas con diferentes capacidades y necesidades, así, tu mensaje llegará a muchas más personas.
              </span>
            </p>
            <p className="service-description">
              <a
                href="/"
                alt="Desarrollo de componentes web"
                title="Desarrollo de componentes web"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Desarrollo de componentes web
              </a>
              <br />
<span>
                Desarrollo de componentes web, módulos y otras soluciones personalizadas de software integradas a tus propiedades digitales.
              </span>
            </p>
            {/* <hr className="service-separator" /> */}
            
          </div>

          <div className="service">
            <img src={imagenAsistencia} alt="Asistencia" style={{ width: '250px' }} />
            <h3 className="service-title">ASISTENCIA 🤝</h3>
            <p className="prompt-text">Obtén soporte eficiente en tus tareas administrativas y organizativas. Simplificamos tu carga de trabajo para que puedas concentrarte en lo más importante.</p>
            
            <p className="service-description">
              <a
                href="/"
                alt="Respondedor Email"
                title="Respondedor Email"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Respondedor Email
              </a>
              <br />
<span>
              Olvídate de la carga de responder correos electrónicos uno por uno. Nuestro servicio de respondedor de email se encargará de contestar tus mensajes de manera profesional.
              </span>
            </p>
            <p className="service-description">
              <a
                href="/"
                alt="Agendado"
                title="Agendado"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Agendador
              </a>
              <br />
<span>
              Simplifica organizando tus citas y reuniones. Nuestro agendador te ayudará a gestionar correctamente tu agenda, citas y recordatorios para que nunca pierdas un evento importante.
              </span>
            </p>
            {/* <hr className="service-separator" /> */}
            
          </div>

          {/* <div className="service">
            <img src={imagenArtisticos} alt="Artístico" style={{ width: '250px' }} />
            <h3 className="service-title">ARTE DIGITAL 🎨</h3>
            <p className="prompt-text">Nos encanta el arte digital, checa algunas piezas de nuestros colaboradores. Sólo contenido original y publicado en las mejores galerías y mercados de arte digital.</p>
            <p className="service-description">
              <a
                href="/"
                alt="Patrones de diseño A"
                title="Patrones de diseño A"
                // rel="noopener noreferrer"
                // target="_blank"
              >
                Patrones de diseño A. 
              </a>
              <br />
<span>
              Vectorizados en formato grande. Puedes usarlos donde quieras y para toda la vida!
              </span>
            </p>
            <hr className="service-separator" />
            <button className="cta-button">Tienda Etsy</button>
          </div> */}
        </section>
        
<section>
  <h3>Usamos estas y otras tecnologías:</h3>
  <ul className="technologies-list">
    <li>
      <FaReact style={{ marginRight: '5px' }} /> React
    </li>
    <li>
      <FaNodeJs style={{ marginRight: '5px' }} /> Node.js
    </li>
    <li>
      <FaHtml5 style={{ marginRight: '5px' }} /> HTML5
    </li>
    <li>
      <FaCss3 style={{ marginRight: '5px' }} /> CSS3
    </li>
    <li>
      <FaBootstrap style={{ marginRight: '5px' }} /> Bootstrap
    </li>
  </ul>
</section>
<Footer />
      </div>
    </BrowserRouter>
  );
};