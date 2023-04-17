import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const serviceCards = [
  {
    title: "Diseños Responsivos",
    description: `Creación de paginas web responsivas 
       que se ajustan a cualquier dispositivo, brindando 
       una óptima experiencia de usuario.`,
    image:
      "https://dxmedia.net/wp-content/uploads/2020/02/Responsive-dxmedia.png",
  },
  {
    title: "Páginas personalizadas",
    description: `Sitios web personalizados, diseñados 
        para cumplir tus objetivos únicos y reflejar la 
        identidad de tu negocio.`,
    image:
      "https://alimemaj.com/assets/webdesign1.png",
  },
  {
    title: "Google SEO",
    description: `Optimizamos tu SEO en Google para 
        aumentar la visibilidad de tu sitio web, atrayendo 
        más visitantes`,
    image:
      "https://postcron.com/es/blog/wp-content/uploads/2017/10/SEO-PNG.png",
  },
];

function Cards() {
  return (
    <Container fluid="md">
      <Row>
        {serviceCards.map((item, key) => (
          <Col key={key}>
            <div className="card-services" id={`card-${key}`}>
                <img src={item.image} alt=""  />
              <div className="card-details" id={`card-details-${key}`}>
                <p className="text-title">{item.title}</p>
                <p className="text-body">{item.description}</p>
              </div>
              <a href="#contactanos"><button className="card-button">Mas información</button></a>
            </div>

            
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
