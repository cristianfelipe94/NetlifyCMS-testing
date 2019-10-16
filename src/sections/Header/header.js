import React from 'react';
import './header.scss';
import Layout from '../../components/layout/layout';

const Header = () => (

  <div className="header">
    <Layout>
      <a href=""><img src="atana-logo.svg" className="header__logo"></img></a>
      <div className="header__menu">
        <a href="" className="menu__link">iniciar sesión</a>
        <button>suscribirse</button>
      </div>
      <p className="header__st-text">crea y distribuye</p>
      <h1 className="header__title">comunicados de prensa</h1>
      <p className="header__nd-text">De una manera más fácil, rápida y sencilla. </p>
      <a href="" className="header__link">crea un comunicado</a>
      <div className="header__arrow">
        <button className="arrow__btn"></button>
      </div>
    </Layout>
  </div>
)

export default Header
