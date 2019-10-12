import React from "react"

import SEO from "../components/seo"
import "../styles/global.scss"
import ContainerHWW from "../sections/how-we-work/how-we-work"

import OurMission from "../sections/our-mission/our-mission";
import Button from "../components/ComponentButtons/buttons";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Button button= 'primary' title= "Suscribirse"/>
    <ContainerHWW/>
    <OurMission/>
  </>
)

export default IndexPage
