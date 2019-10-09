import React from "react"

import SEO from "../components/seo"
import "../styles/global.scss"
import ContainerHWW from "../components/howWeWork/containerHWW"

import OurMission from "../sections/ourMission/ourMission";

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <ContainerHWW/>
    <OurMission/>
  </div>
)

export default IndexPage
