import React from 'react';
import './header.scss';
import Button from '../../components/ComponentButtons/buttons';
import Menu from '../../components/nav-menu/nav-menu';

const Header = () => (
  <div className="header">
    <div className="section__wrapper" >
      <a href=""><img src="atana-logo.svg" alt="logo atana" className="header__logo"></img></a>
      <Menu/>
      <p className="header__st-text">crea y distribuye</p>
      <h1 className="header__title">comunicados de prensa</h1>
      <p className="header__nd-text">De una manera más fácil, rápida y sencilla. </p>
      <Button children="Crea tu comunicado" button="primary" type="button" customStyle="header__btn--primary"/>
      <div className="header__arrow">
        <button className="arrow__btn"></button>
      </div>
    </div>
  </div>
)

export default Header
