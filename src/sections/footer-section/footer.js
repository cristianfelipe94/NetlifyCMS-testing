import React from "react"
import Greetings from "../../components/greetings/greetings"
import { Link } from "gatsby"
import "./footer.scss"

const Footer = () => {
  return (
    <section className="contact">
      <div className="section__wrapper">
        <Greetings />
      </div>
      <div className="footer__gradient">
        <div className="contact__social">
          <Link to="">
            <img src="atana-logo.svg" alt="Átana" className="footer__logo" />
          </Link>
          <div className="social__container">
            <p>Siguenos en nuestras redes sociales:</p>
            <Link to="" className="social social--facebook" />
            <Link to="" className="social social--instagram" />
            <Link to="" className="social social--whatsapp" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
