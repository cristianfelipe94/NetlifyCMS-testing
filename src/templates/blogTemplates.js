import React from "react"

const postTemplate = ({data}) => {
  <StaticQuery
    query = {
      graphql`{query ($path: String!) {
        markdownRemark(frontmatter: {path:{eq:$path}}) {
          frontmatter {
            description
            title
            path
            date (formatString: "YYYY-MM-DD")
          }
          html
        }
      }}
    `}
  
    render={(data) => {
      return (
        <div key={`${post.node.frontmatter.title}-${post.node.frontmatter.date}`}>
          <h2>{post.node.frontmatter.title}</h2>
          <p>{post.node.frontmatter.description}</p>
          <p>{post.node.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{__html: post.node.html}}/>
      </div>
      )
    }}
  ></StaticQuery>  
}

export default postTemplate