import React from "react"

import SEO from "../components/seo"
import "../styles/global.scss"
import ContainerHWW from "../sections/how-we-work/how-we-work"
import Header from "../sections/Header/header"
import OurMission from "../sections/our-mission/our-mission"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header />
    <ContainerHWW />
    <OurMission />
  </>
)

export default IndexPage
