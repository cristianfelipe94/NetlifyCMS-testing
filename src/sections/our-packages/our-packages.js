import React from "react"
import Layout from "../../components/layout/layout"
import Package from "../../components/package/package"

import "./our-packages.scss"

export default () => {
  return (
    <section>
      <Layout>
        <h2 className="section__title">Nuestros paquetes</h2>
        <div className="section__bundler">
          <Package />
        </div>
      </Layout>
    </section>
  )
}
