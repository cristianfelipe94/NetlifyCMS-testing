import React from "react"
import { graphql } from "gatsby"

const postTemplate = ({data}) => {
  const {frontmatter, html} = data.markdownRemark;
  return (
    <div key={`${frontmatter.title}-${frontmatter.date}`}>
      <h2>{frontmatter.title}</h2>
      <p>{frontmatter.description}</p>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html: html}}/>
    </div>
  )
}

export const query = graphql`
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
`

export default postTemplate