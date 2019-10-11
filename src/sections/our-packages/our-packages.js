import React from "react";
import Layout from "../../components/layout/layout";
import Bundle from "../../components/package/package";

import "./our-packages.scss";

export default () => {
    return (
        <section>
            <Layout>
                <h2>
                    Nuestros paquetes
                </h2>
                <div className= "bundler">
                    <Bundle className= "package" bundle = "basic" price = "$30"/>
                    <Bundle className= "package" bundle = "standard" price = "$60"/>
                    <Bundle className= "package" bundle = "premium" price = "$100"/>
                </div>
            </Layout>
        </section>
    );
};


