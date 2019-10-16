import React from 'react';
import './nav-menu.scss';
import Button from '../../components/ComponentButtons/buttons';

const Menu = () => (
  <React.Fragment>
    <div className="header__menu">
      <a href="" className="menu__link">iniciar sesión</a>
      <Button children="Suscribirse" button="primary" type="button" />
    </div>
  </React.Fragment>
)

export default Menu
