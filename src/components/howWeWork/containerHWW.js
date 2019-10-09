import React from 'react'
import Layout from '../layout/layout'
import HowWeWork from './howWeWork'

export default () => {
    return (
        <section>
            <Layout>
                <HowWeWork
                    title="Creación y correción de estilos"
                    paragraph="Revisamos los comunicados de prensa y recomendamos cambios previo al envío."
                    id=""
                />
                <HowWeWork 
                    title="Distribución automatizada "
                    paragraph="Envíamos a medios y periodistas de acuerdo al público meta y la categoría."
                    id=""
                    reverse = {true}
                />
                <HowWeWork
                    title="Seguimiento"
                    paragraph="Hacemos un reporte de análisis de desempeño del comunicado enviado."
                    id=""
                />
            </Layout>
        </section>
    )
}