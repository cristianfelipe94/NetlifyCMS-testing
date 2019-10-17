import React from "react"
import "./header.scss"
import "../../components/ComponentButtons/buttons.scss"
import Menu from "../../components/nav-menu/nav-menu"
import { Link } from "gatsby";

const Header = () => (
  <div className="header">
    <div className="section__wrapper">
      <Link to="">
        <img
          src="atana-logo.svg"
          alt="logo atana"
          className="header__logo"
        />
      </Link>
      <Menu />
      <h1 className="header__title"><span className="header__title-span">crea y distribuye</span> comunicados de prensa</h1>
      <p className="header__text">
        De una manera más fácil, rápida y sencilla.{" "}
      </p>
      <Link to="" className="btn btn--primary">Suscribirse</Link>
      <div className="header__arrow">
        <button className="arrow__btn"></button>
      </div>
    </div>
  </div>
)

export default Header
