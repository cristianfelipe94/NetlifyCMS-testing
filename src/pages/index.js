import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styles/global.scss"
import ContainerHWW from "../components/howWeWork/containerHWW"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <ContainerHWW/>
  </div>
)

export default IndexPage
