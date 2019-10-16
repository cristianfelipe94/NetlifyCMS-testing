import React from "react"

import SEO from "../components/seo"
import "../styles/global.scss"
import ContainerHWW from "../sections/how-we-work/how-we-work"
import OurMission from "../sections/our-mission/our-mission";
import Footer from "../sections/footer-section/footer"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ContainerHWW/>
    <OurMission/>
    <Footer/>
  </>
)

export default IndexPage
