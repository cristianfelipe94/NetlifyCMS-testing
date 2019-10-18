import React from "react"
import Package from "../../components/package/package"
import "./our-packages.scss"
const packagesData = require("../../components/package/package-data.json")

export default () => {
  return (
    <section className="section__wrapper">
      <h2 className="section__title">Nuestros paquetes</h2>
      <div className="section__bundler">
        <Package data={packagesData}/>
      </div>
    </section>
  )
}
