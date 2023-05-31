// import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Header from './components/Header';
import Servicios from './components/Servicios';
import TarjetaFront from './components/TarjetaFront';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
// import ultraHead from './img/ultra-head-square.png';
// import TarjetaFront from "./components/TarjetaFront";
import BotonVolverArriba from './components/BotonVolverArriba';
import imagenProgramacion from './img/ruta-programacion.jpg';
import imagenContenidos from './img/ruta-de-contenidos.jpg';
import ultraMeme from './img/ultra-meme.png';
import { FaReact, FaNodeJs, FaCss3, FaBootstrap } from 'react-icons/fa';


export const App = () => {
  // // Estado del modal
  // const [showModal, setShowModal] = useState(false);

  // // Función para abrir y cerrar el modal
  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Código existente que utiliza useEffect
  useEffect(() => {
    // Código de efecto personalizado
    // ...
    // Ejemplo de limpieza al desmontar el componente
    return () => {
      // Código de limpieza
      // ...
    };
  }, []);

  return (
    <BrowserRouter>
      <div style={{ marginLeft: '20px' }}>
<Helmet>
  {/* Google tag (gtag.js) */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-7C52MLZWVM"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7C52MLZWVM');
  `}
  </script>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ultracobra Ⓤ Servicios digitales y soluciones en Programación + Contenidos 🐍</title>
  <meta
    name="description"
    content="Servicios digitales y soluciones en Programación + Contenidos. Estamos en web, foros, social y pronto más!"
  />
  <meta property="og:image" content="https://i.imgur.com/cCphed4.png" />
</Helmet>
<Header />
<main>
        <section id="intro-promises" className="grid-container">
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
            <img
              src={imagenProgramacion}
              alt="Incrementa tu éxito en línea con soluciones de programación a medida. Confía en nosotros para diseñar componentes y sitios web, ofrecer integraciones de optimización, accesibilidad, y más."
              title="Incrementa tu éxito en línea con soluciones de programación a medida. Confía en nosotros para diseñar componentes y sitios web, ofrecer integraciones de optimización, accesibilidad, y más."
              style={{ width: '250px' }}
            />
            <h3 className="service-title">PROGRAMACIÓN 💻</h3>
            <p className="service-description">
              <a
                href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
                alt="Desarrollo de componentes web"
                title="Desarrollo de componentes web"
                target="_blank"
                rel="noopener noreferrer"
              >
                Desarrollo de componentes web
              </a>
              <br />
              <span>
                Encarga scripts, módulos y componentes personalizados para tu emprendimiento digital. Aprovecha el software para robustecer tu propiedad digital.
              </span>{' '}
              <span className="service-price">
                <a
                  href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
                  className="service-price-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Desde $15
                </a>
              </span>
            </p>
            <p className="service-description">
              <a
                href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
                alt="Integraciones de Accesibilidad"
                title="Integraciones de Accesibilidad"
                target="_blank"
                rel="noopener noreferrer"
              >
                Integración de Accesibilidad Web
              </a>
              <br />
              <span>
                Accesibilidad Web se enfoca en lograr que una web o app sea accesible por personas con diferentes capacidades / necesidades, y así tus mensajes llegarán a más personas.
              </span>{' '}
              <span className="service-price">
                <a
                  href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
                  className="service-price-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Desde $25
                </a>
              </span>
            </p>
            <p className="service-description">
              <a
                href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
                alt="Integraciones de Accesibilidad"
                title="Integraciones de Accesibilidad"
                target="_blank"
                rel="noopener noreferrer"
              >
                Animaciones CSS
              </a>
              <br />
              <span>
                Quieres darle vida a un elemento de tu sitio web? Intenta con animaciones web CSS,le daremos el toque divertido a tu espacio digital.
              </span>{' '}
              <span className="service-price">
                <a
                  href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
                  className="service-price-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Desde $5
                </a>
              </span>
            </p>
            <p className="service-description">
              <a
                href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
                alt="Creación y actualización de blogs"
                title="Creación y actualización de blogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creación de blog: WordPress - No WordPress - No database
              </a>
              <br />
              <span>
                Quieres crear un blog desde cero? te ofrecemos opciones para llevar tu mensaje via WordPress, Blogger, otro CMS, incluso uno programado. Sé el medio y el mensaje.
              </span>{' '}
              <span className="service-price">
                <a
                  href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
                  className="service-price-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Desde $20
                </a>
              </span>
            </p>
            <p className="service-description">
              <a
                href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
                alt="Diseño web estático SPA con frameworks"
                title="Diseño web estático SPA con frameworks"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diseño web estático [SPA] con frameworks
              </a>
              <br />
              <span>
                Crea o mejora tu presencia en línea con el desarrollo de sitios modernos, seguros, rápidos, responsive. Hazte dueño del código de tu proyecto.
              </span>{' '}
              <span className="service-price">
                <a
                  href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
                  className="service-price-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Desde $50
                </a>
              </span>
            </p>
          </div>
          <div className="service">
            <img
              src={imagenContenidos}
              alt="Potencia tu presencia online con contenidos irresistibles y cautivadores. Nosotros nos encargamos de crearlos para ti y destacarte en la competencia."
              title="Potencia tu presencia online con contenidos irresistibles y cautivadores. Nosotros nos encargamos de crearlos para ti y destacarte en la competencia."
              style={{ width: '250px' }}
            />
            <h3 className="service-title">CONTENIDOS 📝</h3>
            <p className="service-description">
              <a
                href="https://forobeta.com/temas/con-excelente-calidad-en-redaccion-y-algo-mas.626791/"
                alt="Post Pack temático redacciones desde 1000 palabras"
                title="Post Pack temático"
                rel="noopener noreferrer"
                target="_blank"
              >
                Redacciones desde 1000 palabras #PubliPack
              </a>
              <br />
              <span>
                Dirigimos a la primera oferta del foro como redactor de contenido atractivo y de calidad. [Aunque el tema del enlace fue cerrado, será republicado en oferta relanzada]
              </span>{' '}
              <span className="service-price">
                <a
                  href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
                  className="service-price-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Desde $5
                </a>
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
                Dirigimos a la segunda oferta del foro como traductor Inglés a Español y Español a Inglés. [Aunque el tema del enlace fue cerrado, será republicado en oferta relanzada]
              </span>{' '}
              <span className="service-price">
                <a
                  href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
                  className="service-price-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Desde $5
                </a>
              </span>
            </p>
            <p className="service-description">
              <a
                href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
                alt="Creación y actualización de blogs"
                title="Creación y actualización de blogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Imágenes generadas via MidJourney / StableDiffusion #GeneradoPack
              </a>
              <br />
              <span>
                Ponemos a trabajar a IAs de Texto a Imagen para que consigas imagenes generadas por inteligencia artificial con prompts eficientes y aplicaciones de gran calidad.
              </span>{' '}
              <span className="service-price">
                <a
                  href="https://forobeta.com/temas/presentando-u-ultracobra-netlify-app.950498/"
                  className="service-price-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Desde $10
                </a>
              </span>
            </p>
          </div>
        </section>
        <hr className="linea-divisoria-delgada" />

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
              <FaCss3 style={{ marginRight: '5px' }} /> CSS3
            </li>
            <li>
              <FaBootstrap style={{ marginRight: '5px' }} /> Bootstrap
            </li>
          </ul>
        </section> 
        <img
          src={ultraMeme}
          alt="Ultra meme"
          className="ultra-meme"
        />
        </main>
        <BotonVolverArriba />
        <Footer />
        <Contacto />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="./components/servicios" element={<Servicios />} />
          <Route path="./components/TarjetaFront" element={<TarjetaFront />} />
        </Routes> 
      </div>
      {/* Mostrar modal. Va con el codigo useContext useEffect inactivo arriba... 
            <button onClick={toggleModal}>Mostrar Modal</button> */}
    </BrowserRouter>
  );
};

export default App;
