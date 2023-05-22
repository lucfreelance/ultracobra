// import React from 'react';
import './App.css';
import imagenProgramacion from './img/ruta-de-la-imagen-programacion.jpg';
import imagenContenidos from './img/ruta-de-la-imagen-contenidos.jpg';
import imagenAsistencia from './img/ruta-de-la-imagen-asistencia.jpg';
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
      <input type="email" name="email" placeholder="Ingresa tu correo electrónico" />
      <button type="submit">Suscríbete al Boletín</button>
    </form>
  );
};

export const App = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <header>
        <h1>Ⓤultracobra</h1>
        <p>Proveedor de servicios digitales en Español</p>
      </header>

      <section id="services">
        <h2>Nuestros Servicios</h2>

        <div className="service">
          <img src={imagenProgramacion} alt="Programación" style={{ width: '200px' }} />
          <a href="/servicios">
            <h3 className="service-title">PROGRAMACIÓN 💻</h3>
          </a>
          <small>Desarrollamos aplicaciones web y móviles, creamos sitios web modernos, optimizamos páginas web y ofrecemos servicios de migración e integración de accesibilidad.</small>
          <ul className="service-description">
            <li className="list-item">Desarrollo de aplicaciones web</li>
            <li className="list-item">Creación de sitios web modernos</li>
            <li className="list-item">Optimización de páginas web</li>
            <li className="list-item">Integración de accesibilidad</li>
            <li className="list-item">Migración de sitios</li>
          </ul>
          <hr className="service-separator" />
        </div>

        <div className="service">
          <img src={imagenContenidos} alt="Contenidos" style={{ width: '200px' }} />
          <a href="/servicios">
            <h3 className="service-title">CONTENIDOS 📝</h3>
          </a>
          <small>Generamos contenido atractivo y de calidad para blogs, redes sociales y sitios web. También nos encargamos de la redacción y edición de textos, y creamos estrategias de marketing de contenidos.</small>
          <ul className="service-description">
            <li className="list-item">Creación de contenido para blogs, social y web</li>
            <li className="list-item">Imágenes generadas por computador</li>
            <li className="list-item">Estrategias de marketing de contenidos</li>
            <li className="list-item">Imágenes generadas por computador</li>
            <li className="list-item">Estrategias de marketing de contenidos</li>
          </ul>
          <hr className="service-separator" />
        </div>

        <div className="service">
          <img src={imagenAsistencia} alt="Asistencia" style={{ width: '200px' }} />
          <a href="/servicios">
            <h3 className="service-title">ASISTENCIA 🤝</h3>
          </a>
          <small>Proporcionamos soporte administrativo remoto, gestionamos correos electrónicos, programamos citas, brindamos atención al cliente y realizamos diversas tareas de asistencia virtual.</small>
          <ul className="service-description">
            <li className="list-item">Asistente virtual</li>
            <li className="list-item">Gestión de correos electrónicos</li>
            <li className="list-item">Programación de citas</li>
            <li className="list-item">Atención al cliente</li>
            <li className="list-item">Tareas de asistencia virtual</li>
          </ul>
          <hr className="service-separator" />
        </div>
      </section>

      <footer>
        <p>2023 Ⓤ ultracobra&copy; Servicios Digitales</p>
        <small>Si estás interesado/a en nuestros servicios o tienes alguna pregunta, no dudes en ponerte en contacto vía:</small>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <i className="fab fa-twitter"></i> <a href="https://twitter.com/cobraultra" target="_blank" rel="noopener noreferrer">@cobraultra</a>
          </li>
          <li>
            <i className="far fa-envelope"></i> <a href="mailto:ultracobre@gmail.com" target="_blank" rel="noopener noreferrer">ultracobre@gmail.com</a>
          </li>
          <li>
            <i className="fab fa-whatsapp"></i> <a href="https://wa.me/573166054533" target="_blank" rel="noopener noreferrer">Chatea con Ⓤultracobra:</a>
          </li>
        </ul>
        <p>¡Estaremos encantados de atenderte y trabajar en tus proyectos digitales!</p>
        <NewsletterForm /> {/* Agregamos el componente NewsletterForm aquí */}
      </footer>
    </div>
  );
};
