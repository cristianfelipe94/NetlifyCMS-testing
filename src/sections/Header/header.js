import React from 'react';
import'./header.scss';
import Layout from '../../components/layout/layout';

const Header = () => (
  
  <div className="header">
    <Layout>
      <div className="header__menue">
        <a href="#"><img src="Atana-logo.svg"></img></a>
        {/* bottom  sing up*/}
        {/* login */}
      </div>
      <h3 className="header__title--color-white">crea y distribuye</h3>
      <h1 className="header__tittle">comunicados de prensa</h1>
      <p className="header__text">De una manera más fácil, rápida y sencilla. </p>
      {/* bottom create statement */}
      </Layout>
      
  </div>
  
)

export default Header
