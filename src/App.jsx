import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/styles/ComponentsStyles.css";
import NavbarKintech, {BootstrapNavbar} from "./components/NavbarKintech";
import Cards from "./components/Cards";
import FormsContactUs from "./components/Forms";
/* Import Images */
import phone from "./assets/images/foto_telefono.png";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="site">
    {screen.width>1000?<NavbarKintech />:<BootstrapNavbar/>}
      
      {/* {alert(screen.width)} */}
      {/*Cover section*/}
      <section className="kintech-section" id="inicio">
        <h1 className="font-nato-serif">Sitios web profesionales</h1>
        <p className="font-nato-serif">
          Impulsamos negocios con sitios web personalizados, atractivos y
          eficientes para maximizar su crecimiento.
        </p>
        <a href="#contactanos"><button className="btn-cover">Contáctanos</button></a>
        <div className="square-background-image"></div>
      </section>

      {/* Our services */}
      <section className="kintech-section" id="servicios">
        <h1 className="font-nato-serif title-our-services">
          Nuestros servicios
        </h1>
        <p>
          Brindamos servicios tecnológicos para crear sitios web profesionales
          personalizados, adaptables a cualquier pantalla y con un sólido SEO,
          impulsando el crecimiento de negocios en línea.
        </p>
        <Cards />
      </section>

      {/* Why us section */}
      <section className="kintech-section" id="nosotros">
        <h1 className="font-nato-serif why-us-title">¿Por qué nosotros?</h1>
        <img src={phone} id="phone" alt=""  />
        <div className="trapezoid"></div>
        <p className="why-us-description">
          En Kintech, creamos páginas web profesionales y personalizadas,
          comprometidos con la excelencia, innovación y atención al cliente.
          Nuestra misión es potenciar negocios y marcar la diferencia en su
          presencia en línea.
        </p>
        <a href="#contactanos"><button className="btn-why-us-section"> Crea tu página</button></a>
      </section>

      {/* Contact Us section */}
      <section className="kintech-section" id="contactanos">
        <FormsContactUs />
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container-links-footer">
          <a href="#inicio" className="footerLinks"><span>Inicio</span></a>
          <a href="#servicios" className="footerLinks"><span>Nuestros servicios</span></a>
          <a href="#nosotros" className="footerLinks"><span>Nosotros</span></a>
          <a href="#contactanos" className="footerLinks"><span>Contáctanos</span></a>
        </div>
        <p id="footer-slogan">"Transformando ideas en éxitos digitales"</p>
        <hr />
        <p id="copyright">©2023 Kintech_mex</p>
      </footer>
      </div>
  );
}

export default App;
