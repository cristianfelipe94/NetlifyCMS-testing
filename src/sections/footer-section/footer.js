import React from "react";
import Layout from "../../components/layout/layout"
import Social from "../../components/component-social/social";
import "./footer.scss";

const Footer = () => {
  return (
    <section className="contact">
      <Layout>
        <image src="../images/avatar-thumbnail.png" alt="Imagen de contacto" className="contact__avatar"/>
        <div className="contact__info">
          <p>Hola, Soy Sergio</p>
          <p>Comuniquese con nosotros al correo example.atana@gmail.com.</p>
        </div>
        <div>
          <div className= "footer__logo"></div>
          <div>
            <p>
              Siguenos en nuestras redes sociales:
            </p>
            <Social platform= "facebook"/>
            <Social platform= "instagram"/>
            <Social platform= "whatsapp"/>
          </div>
        </div>
      </Layout>
    </section>
  )
};

export default Footer;