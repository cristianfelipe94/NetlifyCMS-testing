import React from "react"
import "./nav-menu.scss"
import { Link } from "gatsby"

const Menu = () => (
  <React.Fragment>
    <div className="nav__menu">
      <Link to="" className="nav__link">
        iniciar sesión
      </Link>
      <Link to="/blog" className="nav__link">
        noticias
      </Link>
      <Link to="" className="nav__btn btn btn--primary">
        Suscribirse
      </Link>
    </div>
  </React.Fragment>
)
export default Menu
