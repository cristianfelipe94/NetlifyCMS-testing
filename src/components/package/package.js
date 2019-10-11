import React from "react";
import "./package.scss";

export default ({bundle = "basic", price = "$60"}) => {
    const type = bundle;

    const bundleName= {
        basic : <p>Básico</p>,
        standard: <p>Estandar</p>,
        premium: <p>Premium</p>
    }

    const bundleFeatures= {
        basic : [
            <li>Con este paquete se podrán crear comunicados.</li>,
            <li>Capacidad de recibir consejos de los mejores comunicadores.</li>
        ],
        standard: [
            <li>Con este paquete los comunicados viajan a más comunicadores.</li>,
            <li>Otras más.</li>
        ],
        premium: [
            <li>Con este paquete la cantidad de comunicados creados no es algo en que pensar.</li>,
            <li>Otras más.</li>
        ]
    }

    const bundleColors= {
        basic : "package--basic",
        standard: "package--standard",
        premium: "package--premium"
    }
    
    return (
        <div className= {bundleColors[type]}>
            <h3 className= "package__title">
                Paquete
            </h3>
            <p className= "package__type">
                {bundleName[type]}
            </p>
            <p className= "package__price">
                {price}
            </p>
            <ul className= "package__features">
                {bundleFeatures[type]}
            </ul>
            <button>
                Obtener paquete
            </button>
        </div>
    )
}