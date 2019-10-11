import React from "react";

export default ({bundle = "basic", price = "$60"}) => {
    const type = bundle;

    const bundleName= {
        basic : <p>Paquete básico</p>,
        standard: <p>Paquete estandar</p>,
        premium: <p>Paquete premium</p>
    }

    const bundleFeatures= {
        basic : [
            <li>"Con este paquete se podrán crear comunicados.</li>,
            <li>"Capacidad de recibir consejos de los mejores comunicadores.</li>
        ],
        standard: [
            <li>"Con este paquete los comunicados viajan a más comunicadores.</li>,
            <li>"Otras más."</li>
        ],
        premium: [
            <li>Con este paquete la cantidad de comunicados creados no es algo en que pensar.</li>,
            <li>"Otras más."</li>
        ]
    }
    
    return (
        <div>
            <h3>
                Paquete
            </h3>
            <p>
                {bundleName[type]}
            </p>
            <p>
                {price}
            </p>
            <ul>
                {bundleFeatures[type]}
            </ul>
            <button>
                Obtener paquete
            </button>
        </div>
    )
}