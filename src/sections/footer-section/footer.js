import React from "react";
import Layout from "../../components/layout/layout"
import Social from "../../components/component-social/social";
import "./footer.scss";

const Footer = () => {
  return (
    <section className="contact">
      <Layout>
        <div className="contact__greetings">
          <div className="greetings__avatar"/>
          <div className="greetings__text">
            <p>Hola, Soy Sergio</p>
            <p>Comuniquese con nosotros al correo example.atana@gmail.com.</p>
          </div>
        </div>
      </Layout>
      <div className="footer__gradient">
        <div className="contact__social">
          <div className= "footer__logo"></div>
          <div className="social__container">
            <p>
              Siguenos en nuestras redes sociales:
            </p>
            <Social platform= "facebook"/>
            <Social platform= "instagram"/>
            <Social platform= "whatsapp"/>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Footer;