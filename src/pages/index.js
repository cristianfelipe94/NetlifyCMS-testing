import React from "react"

import SEO from "../components/seo"
import "../styles/global.scss"
import ContainerHWW from "../sections/howWeWork/containerHWW"

import OurMission from "../sections/ourMission/ourMission";
import Header from "../sections/Header/header";

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Header/>
    <OurMission/>
  </div>
)

export default IndexPage
