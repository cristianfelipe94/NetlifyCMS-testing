import React from "react";
import "./info-card.scss";

export default ({ title, paragraph, button, id, src, modifier }) => {

  return (
    <div className={`container ${modifier}`}>
      <div className="container__info">
        <h3 className="info__tile">{title}</h3>
        <p className="info__paragraph">{paragraph}</p>
        <button className="info__button">Crea un comunicado{button}</button>
      </div>

      <div className="container__animation" id={id}>
        <img className={id} src={src} />
      </div>
    </div>
  )

}