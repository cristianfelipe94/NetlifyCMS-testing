import React from "react";
import Layout from "../../components/layout/layout";
import Bundle from "../../components/package/package";

export default () => {
    return (
        <section>
            <Layout>
                <h2>
                    Nuestros paquetes
                </h2>
                <Bundle bundle = "basic" price = "$30"/>
                <Bundle bundle = "standard" price = "$60"/>
                <Bundle bundle = "premium" price = "$100"/>
            </Layout>
        </section>
    );
};


