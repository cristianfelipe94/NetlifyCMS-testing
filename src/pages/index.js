import React from "react"

import SEO from "../components/seo"
import "../styles/global.scss"
import ContainerHWW from "../sections/howWeWork/containerHWW"

import OurMission from "../sections/ourMission/ourMission";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ContainerHWW/>
    <OurMission/>
  </>
)

export default IndexPage
