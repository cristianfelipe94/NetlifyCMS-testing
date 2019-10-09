import React from 'react'
import Layout from '../../components/layout/layout'
import HowWeWork from '../../components/ComponentHowWeWork/howWeWork'

export default () => {
    return (
        <section>
            <Layout>
                <HowWeWork
                    title="Creación y correción de estilos"
                    paragraph="Revisamos los comunicados de prensa y recomendamos cambios previo al envío."
                    id=""
                    src = "comunicado.svg"
                />
                <HowWeWork 
                    title="Distribución automatizada "
                    paragraph="Envíamos a medios y periodistas de acuerdo al público meta y la categoría."
                    id=""
                    reverse = {false}
                    src = "media.svg" 
                />
                <HowWeWork
                    title="Seguimiento"
                    paragraph="Hacemos un reporte de análisis de desempeño del comunicado enviado."
                    id=""
                    src = "grafica.svg"
                />
            </Layout>
        </section>
    )
}