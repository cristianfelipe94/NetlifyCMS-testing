import React from "react"

export default ({ title, paragraph, button, id, src, reverse = false }) => {

    const order = [
        <div>
            <h3>{title}</h3>
            <p>{paragraph}</p>
            <button>Crea un comunicado{button}</button>
        </div>
        ,
        <div id={id}>
            <img src= {src}/>
        </div>
    ]
    return (
        <div>
            {
                reverse ?
                    [order[0], order[1]]
                    :
                    [order[1], order[0]]
            }
        </div>
    )

}