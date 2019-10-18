import React from "react"
import SEO from "../components/seo"
import ContainerHWW from "../sections/how-we-work/how-we-work"
import Header from "../sections/Header/header"
import OurMission from "../sections/our-mission/our-mission"
import Footer from "../sections/footer-section/footer"
import "../styles/global.scss"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header />
    <ContainerHWW />
    <OurMission />
    <Footer />
  </>
)

export default IndexPage
