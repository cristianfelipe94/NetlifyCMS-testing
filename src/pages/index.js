import React from "react"

import SEO from "../components/seo"
import "../styles/global.scss"
import ContainerHWW from "../sections/how-we-work/how-we-work"
import OurPackages from "../sections/our-packages/our-packages"
import OurMission from "../sections/our-mission/our-mission"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ContainerHWW />
    <OurPackages />
    <OurMission />
  </>
)

export default IndexPage
