import React from 'react'
import Layout from '../../components/layout/layout'
import InfoCard from '../../components/info-card/info-card'

export default () => {
    return (
        <section>
            <Layout>
                <InfoCard
                    title="Creación y correción de estilos"
                    paragraph="Revisamos los comunicados de prensa y recomendamos cambios previo al envío."
                    id="comunicado"
                    src = "comunicado.svg"
                />
                <InfoCard 
                    title="Distribución automatizada "
                    paragraph="Envíamos a medios y periodistas de acuerdo al público meta y la categoría."
                    id="media"
                    src = "media.svg" 
                />
                <InfoCard
                    title="Seguimiento"
                    paragraph="Hacemos un reporte de análisis de desempeño del comunicado enviado."
                    id="grafica"
                    src = "grafica.svg"
                />
            </Layout>
        </section>
    )
}