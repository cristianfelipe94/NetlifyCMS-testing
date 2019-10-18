import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./package.scss"
import "../ComponentButtons/buttons.scss"

const Package = ({ data, type }) => {
  const toRenderData = []

  data.bundles.map(element => {
    if (element.bundle === type && element !== undefined) {
      toRenderData.push(element)
    }
  })

  const bundleFeatures = processFeature => {
    const featureItem = processFeature.features.map(feature => {
      return <li>{feature}</li>
    })
    return <ul className="package__features">{featureItem}</ul>
  }

  const processBundle = () => {
    const bundleCard = toRenderData.map(dataBundle => {
      return (
        <div className={`package package--${dataBundle.bundle}`}>
          <div className="package__body">
            <div className="package__head">
              <h3 className="package__title">Paquete</h3>
              <p className="package__type">{dataBundle.title}</p>
            </div>
            <p className="package__price">{dataBundle.price}</p>
            {bundleFeatures(dataBundle)}
            <div className="package__footer">
              <Link to="" className=" btn btn--secondary package__btn">
                Obtener {dataBundle.title}
              </Link>
            </div>
          </div>
        </div>
      )
    })
    return bundleCard
  }

  return processBundle()
}

Package.defaultProps = {
  data: [],
  bundle: "basic",
}

Package.propTypes = {
  data: PropTypes.array,
  bundle: PropTypes.string,
}

export default Package
