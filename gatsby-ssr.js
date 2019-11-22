import React from "react";

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents(
    <script
    type="text/javascript"
    src="https://identity.netlify.com/v1/netlify-identity-widget.js"
    />
  )
  setPostBodyComponents(
    <script
    dangerouslySetInnerHTML={{
      __html:`
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", function (user) {
          if (!user) {
            window.netlifyIdentity.on("login", function () {
              document.location.href = "/admin/";
            })
          }
        })
      }
      `
    }}/>
  );
}