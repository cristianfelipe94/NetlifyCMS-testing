import React from "react"
import "../../components/ComponentButtons/buttons.scss"
import Menu from "../../components/nav-menu/nav-menu"
import header from "../../animations/header-animation/header-animation"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import "./header.scss"

const Header = () => {
  const HeaderAnimation = header()
  return (
    <StaticQuery
      // query= {
      //   graphql` {
      //     allFile(filter: {sourceInstanceName: {eq: "landing"} name: {eq: "head"}}) {
      //       edges {
      //         node {
      //           childMarkdownRemark {
      //             frontmatter {
      //               intro
      //               mid
      //               outro
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }
      // `}

      render={(data) => {
        const {intro, mid, outro} = data.allFile.edges["0"].node.childMarkdownRemark.frontmatter;
        return (
          <div className="header">
            <div className="section__wrapper">
              <Link to="">
                <img src="atana-logo.svg" alt="átana" className="header__logo" />
              </Link>
              <Menu />
              <h1 className="header__title">
                <span className="header__title-span">{intro}</span>{" "}
                {mid}
              </h1>
              <p className="header__text">
                {outro}{" "}
              </p>
              <Link to="" className="header__btn btn btn--primary">
                Suscribirse
              </Link>
              <div className="header__animation">
                <HeaderAnimation />
              </div>
            </div>
            <div className="header__arrow">
              <button className="arrow__btn"></button>
            </div>
          </div>
        )
      }}
    ></StaticQuery>
  )
}
export default Header
