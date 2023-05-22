// import React from 'react';
import './App.css';
import imagenProgramacion from './img/ruta-de-la-imagen-programacion.jpg';
import imagenContenidos from './img/ruta-de-la-imagen-contenidos.jpg';
import imagenAsistencia from './img/ruta-de-la-imagen-asistencia.jpg';
import imagenArtisticos from './img/ruta-de-la-imagen-artisticos.jpg';
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
    <div style={{ marginLeft: '20px' }}>
      <header>
        <h1>Ⓤ ultracobra Ⓤ</h1>
        <p>Proveedores de servicios via digital</p>
      </header>



      <section id="services" className="grid-container">
  <div className="column">
    <h3 className="intro-title">Mejora tus productividad</h3>
    <p className="intro-description">En ultracobra, ofrecemos una amplia gama de servicios digitales diseñados para impulsar tu éxito en línea.</p>
  </div>
  <div className="column">
    <h3 className="intro-title">Potencializa tu presencia en línea</h3>
    <p className="intro-description">Desde desarrollo de aplicaciones web y móviles hasta generación de contenido atractivo, estamos aquí para ayudarte a mejorar tus proyectos.</p>
  </div>
        <div className="service-intro">
  <div className="intro-text">
  </div>
</div>
        <div className="service">
          <img src={imagenProgramacion} alt="Programación" style={{ width: '200px' }} />
          <a href="/servicios">
            <h3 className="service-title">PROGRAMACIÓN 💻</h3>
          </a>
          <small>Desarrollamos aplicaciones web y móviles, creamos sitios web modernos, optimizamos páginas web y ofrecemos servicios de migración e integración de accesibilidad.</small>
          <ul className="service-description">
            <li className="list-item">Creación de sitios web modernos</li>
            <li className="list-item">Desarrollo de componentes web</li>
            <li className="list-item">Optimización de páginas web</li>
            <li className="list-item">Integraciones de Accesibilidad</li>
          </ul>
          <hr className="service-separator" />
          <button className="cta-button">Saber más</button>
        </div>

        <div className="service">
          <img src={imagenContenidos} alt="Contenidos" style={{ width: '200px' }} />
          <a href="/servicios">
            <h3 className="service-title">CONTENIDOS 📝</h3>
          </a>
          <small>Generamos contenido atractivo y de calidad para blogs, redes sociales y sitios web. También nos encargamos de la redacción y edición de textos, y creamos estrategias de marketing de contenidos.</small>
          <ul className="service-description">
            <li className="list-item">Contenidos para blogs, web y social</li>
            <li className="list-item">Imágenes generadas para ilustración</li>
            <li className="list-item">Sonidos, voces y canciones generadas</li>
            <li className="list-item">Creación y actualización de blogs</li>
          </ul>
          <hr className="service-separator" />
          <button className="cta-button">Saber más</button>
        </div>

        <div className="service">
          <img src={imagenAsistencia} alt="Asistencia" style={{ width: '200px' }} />
          <a href="/servicios">
            <h3 className="service-title">ASISTENCIA 🤝</h3>
          </a>
          <small>Proporcionamos soporte administrativo remoto, gestionamos correos electrónicos, programamos citas, brindamos atención al cliente y realizamos diversas tareas de asistencia virtual.</small>
          <ul className="service-description">
            <li className="list-item">Asistencia virtual</li>
            <li className="list-item">Gestión de correos</li>
            <li className="list-item">Community Nanager</li>
            <li className="list-item">Escritorio remoto</li>
          </ul>
          <hr className="service-separator" />
          <button className="cta-button">Saber más</button>
        </div>

        <div className="service">
          <img src={imagenArtisticos} alt="Artísticos" style={{ width: '200px' }} />
          <a href="/servicios">
            <h3 className="service-title">ARTÍSTICOS 🎨</h3>
          </a>
          <small>Explora nuestros servicios de despliegues artísticos</small>
          <ul className="service-description">
            <li className="list-item">Patrones de Diseño POD</li>
            <li className="list-item">Ilustración digital</li>
            <li className="list-item">Arte conceptual</li>
            <li className="list-item">Fotografía creativa</li>
          </ul>
          <hr className="service-separator" />
          <button className="cta-button">Saber más</button>
        </div>

      </section>
      <footer className="grid-container footer">
  <ul style={{ listStyleType: 'none', padding: 0 }}>
  <li>
    <i className="fab fa-twitter"></i> <a href="https://twitter.com/cobraultra" target="_blank" rel="noopener noreferrer">Twitter @cobraultra</a>
  </li>
  <li>
    <i className="fab fa-whatsapp"></i> <a href="https://wa.me/573166054533" target="_blank" rel="noopener noreferrer">WhatsApp Ⓤultracobra</a>
  </li>
  <li>
    <i className="far fa-envelope"></i> <a href="mailto:ultracobre@gmail.com" target="_blank" rel="noopener noreferrer">ultracobre@gmail.com</a>
  </li>
  <li>
    <i className="fab fa-forumbee"></i> <a href="https://forobeta.com/members/ultracobra.179278/" target="_blank" rel="noopener noreferrer">Contacto en ForoBeta</a>
  </li>
  </ul>
  
  <p>2023 Ⓤ ultracobra 🐍 Servicios Digitales</p>
  <div className="newsletter-form" style={{ gridColumn: '1 / -1' }}>
    <NewsletterForm /> {/* Agregamos el componente NewsletterForm aquí */}
  </div>
</footer>


    </div>
  );
};
