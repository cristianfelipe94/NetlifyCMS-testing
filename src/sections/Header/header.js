import React from 'react';
import './header.scss';
import Layout from '../../components/layout/layout';

const Header = () => (

  <div className="header">
    <Layout>
      <a href="#"><img src="Atana-logo.svg" className="header__logo"></img></a>
      <div className="header__menu">
          <button className="menu__btn">iniciar sesión</button>
          <button className="menu__btn">suscribirse</button>
      </div>
      <h3 className="header__title--color-white">crea y distribuye</h3>
      <h1 className="header__tittle">comunicados de prensa</h1>
      <p className="header__text">De una manera más fácil, rápida y sencilla. </p>
      <button className="header__btn">crea un comunicado</button>
      <button type="button" className="header__arrow"><img src="arrow.svg"></img></button>
    </Layout>
  </div>
)

export default Header
