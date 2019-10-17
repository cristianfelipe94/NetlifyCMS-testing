import React from "react"
import InfoCard from "../../components/info-card/info-card"

export default () => {
  const cards = [
    {
      title: "Creación y correción de estilos",
      paragraph:
        "Revisamos los comunicados de prensa y recomendamos cambios previo al envío.",
      id: "comunicado",
      link: 'Crea un comunicado >',
      src: "comunicado.svg",
    },
    {
      modifier: "container--reverse",
      title: "Distribución automatizada",
      paragraph:
        "Envíamos a medios y periodistas de acuerdo al público meta y la categoría.",
      id: "media",
      link: 'Crea un comunicado >',
      src: "media.svg",
    },
    {
      title: "Seguimiento",
      paragraph:
        "Hacemos un reporte de análisis de desempeño del comunicado enviado.",
      id: "grafica",
      link: 'Crea un comunicado >',
      src: "grafica.svg",
    },
  ]

  return (
    <section className="section__wrapper">
      {cards.map(card => (
        <InfoCard {...card} />
      ))}
    </section>
  )
}
