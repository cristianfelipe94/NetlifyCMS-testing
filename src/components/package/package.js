import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./package.scss"
import "../ComponentButtons/buttons.scss"

const Package = ({ data }) => {
  const [windowWidth, windowWidthHandler] = useState(window.innerWidth)
  const [packageToggler, togglerHandler] = useState(false)
  const [featureState, stateHandler] = useState("package__body--close")

  const windowWidthSetter = () => {
    windowWidthHandler(window.innerWidth)
  }

  const stateSetter = () => {
    if (windowWidth > 700) {
      return stateHandler("package__body--open")
    } else if (windowWidth < 700) {
      return packageToggler
        ? stateHandler("package__body--open")
        : stateHandler("package__body--close")
    }
  }

  useEffect(() => {
    stateSetter()
    window.addEventListener("resize", windowWidthSetter)
    window.addEventListener("resize", stateSetter)
    return () => {
      window.removeEventListener("resize", windowWidthSetter)
      window.removeEventListener("resize", stateSetter)
    }
  })

  const bundleFeatures = processFeature => {
    const featureItem = processFeature.map((feature, id) => {
      return <li key={`${data.bundle}-${id}`}>{feature}</li>
    })
    return (
      <ul className="package__features package__features--desktop">
        {featureItem}
      </ul>
    )
  }

  return (
    <div className={`package package--${data.bundle}`}>
      <div className="package__body">
        <div className="package__head">
          <p className="package__type">{data.title}</p>
        </div>
        <div className={featureState}>
          <p className="package__price">{data.price}</p>
          {bundleFeatures(data.features)}
          <Link to="" className="btn btn--secondary package__btn">
            Obtener {data.title}
          </Link>
        </div>
        <button
          className="btn--seemore package__btn--seemore"
          onClick={() => togglerHandler(!packageToggler)}>
          Ver más
        </button>
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
