import React from "react";
import "./info-card.scss";

export default ({ title, paragraph, id, src, link, href, modifier }) => {

  return (
    <div className={`container ${modifier}`}>
      <div className="container__info">
        <h3 className="info__tile">{title}</h3>
        <p className="info__paragraph">{paragraph}</p>
        <a className="info__link" href={href}> Crea un comunicado > </a>
      </div>

      <div className="container__animation" id={id}>
        <img className={id} src={src} />
      </div>
    </div>
  )

}