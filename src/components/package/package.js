import React from "react";

export default ({bundle = "basicBundle", price = "$60"}) => {
    
    const bundlesFeatures= {
        basicBundle : [
            <li>"Con este paquete se podrán crear comunicados.</li>,
            <li>"Capacidad de recibir consejos de los mejores comunicadores.</li>
        ],
        standardBundle: [
            <li>"Con este paquete los comunicados viajan a más comunicadores.</li>,
            <li>"Otras más."</li>
        ],
        premiumBundle: [
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
                {bundle}
            </p>
            <p>
                {price}
            </p>
            <ul>
                {bundlesFeatures[bunble]}
            </ul>
            <button>
                Obtener paquete
            </button>
        </div>
    )
}