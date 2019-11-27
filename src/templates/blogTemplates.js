import React from "react"
import { StaticQuery, graphql } from "gatsby"

const postTemplate = () => (
  <StaticQuery
    query = {graphql`
      query ($title: String!) {
        markdownRemark(frontmatter: {title: {eq: $title}}) {
          html
          frontmatter {
            title
            author
            date (formatString: "YYYY-MM-DD")
            description
          }
        }
      }
    `}
  
    render={(data) => {
      const {markdownRemark} = data;
      const {html, frontmatter} = markdownRemark; 
      return (
        <div key={`${frontmatter.title}-${frontmatter.date}`}>
          <h2>{frontmatter.title}</h2>
          <p>{frontmatter.description}</p>
          <p>{frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{__html: html}}/>
        </div>
      )
    }}
  />
)

export default postTemplate