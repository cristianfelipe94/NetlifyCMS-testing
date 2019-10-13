import React from "react"
import "./package.scss"
const packagesData = require("./package-data.json")

const Package = ({ data, bundle }) => {

  const bundleFeatures = (processFeature) => {
    const featureItem = processFeature.features.map((feature) => {
      return (
        <li>{feature}</li>
      )
    });
    return <ul className="package__features">{featureItem}</ul>
  }

  const processBundle = () => {
    const bundleCard = data.bundles.map((dataBundle) => {
      return (
        <div className={`package package--${dataBundle.bundle}`}>
          <div className="package__body">
            <div className= "package__head">
              <h3 className="package__title">Paquete</h3>
              <p className="package__type">{dataBundle.title}</p>
            </div>
            <p className="package__price">{dataBundle.price}</p>
            {bundleFeatures(dataBundle)}
            <div className="package__footer">
              <button style= {{transform: "rotateX(180deg)"}}>Obtener paquete</button>
            </div>
          </div>
        </div>
      )
    });
    console.log(bundleCard);
    return bundleCard;
  };

  return (processBundle());
}

Package.defaultProps = {
  bundle: "basic",
  data: packagesData,
}

export default Package
