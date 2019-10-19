import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./package.scss"
import "../ComponentButtons/buttons.scss"

const Package = ({ data }) => {
  const bundleFeatures = processFeature => {
    const featureItem = processFeature.map((feature, id) => {
      return <li key={`${data.bundle}-${id}`}>{feature}</li>
    })
    return <ul className="package__features">{featureItem}</ul>
  }

  return (
    <div className={`package package--${data.bundle}`}>
      <div className="package__body">
        <div className="package__head">
          <h3 className="package__title">Paquete</h3>
          <p className="package__type">{data.title}</p>
        </div>
        <p className="package__price">{data.price}</p>
        {bundleFeatures(data.features)}
        <div className="package__footer">
          <Link to="" className=" btn btn--secondary package__btn">
            Obtener {data.title}
          </Link>
        </div>
      </div>
    </div>
  )
}

Package.defaultProps = {
  data: [],
  bundle: "basic",
}

Package.propTypes = {
  data: PropTypes.object,
  bundle: PropTypes.string,
}

export default Package
