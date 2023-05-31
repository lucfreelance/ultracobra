import { FaWhatsapp, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../App.css'

const Footer = () => {
  return (
    <footer className="footer-container">
            
      <section className="footer-signature">
      Ⓤ UltraCobra &copy; MMXXIII | Designed by {' '}
            <a
              href="https://github.com/lucfreelance"
              alt="@lucfreelance en GitHub"
              title="lucfreelance en GitHub"
              rel="noopener noreferrer"
              target="_blank"
            >
              @lucfreelance
            </a>
      </section>
      <section className="footer-signature">
      Relative to author websites: {' '}
            <a
              href="https://oportunidadesilimitadas.com/#table-board-top"
              alt="Oportunidades Ilimitadas | Directorio web y app de #InteligenciaArtificial"
              title="Oportunidades Ilimitadas Directorio web y app de Inteligencia Artificial"
              rel="noopener noreferrer"
              target="_blank"
            >
              oi-ia
            </a>{' | '}
            <a
              href="https://oportunidadesilimitadas.com/blogs/_site/index.html"
              alt="Blogs de Oportunidades Ilimitadas | Blog sobre #InteligenciaArtificial"
              title="Blogs de Oportunidades Ilimitadas"
              rel="noopener noreferrer"
              target="_blank"
            >
              Blogs
            </a>
            <section className="footer-logos">
      <ul style={{ listStyleType: 'none', padding: 20 }}>
        <li>
          <a href="https://wa.me/573166054533" target="_blank" rel="noopener noreferrer" alt="WhatsApp ultracobra" title="WhatsApp @ultracobra">
            <FaWhatsapp className="fa-cloud" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/cobraultra" target="_blank" rel="noopener noreferrer" alt="Twitter ultracobra" title="Twitter @ultracobra">
            <FaTwitter className="fa-cloud" />
          </a>
        </li>
        <li>
          <a href="mailto:ultracobre@gmail.com" target="_blank" rel="noopener noreferrer" alt="Email ultracobra" title="Email ultracobra">
            <FaEnvelope className="fa-cloud" />
          </a>
        </li>
      </ul>
      </section>
      </section>
    </footer>
  );
};

export default Footer;