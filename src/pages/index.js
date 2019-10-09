import React from "react"

import SEO from "../components/seo"
import "../styles/global.scss"

import OurMission from "../sections/ourMission/ourMission";

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <OurMission/>
  </div>
)

export default IndexPage
