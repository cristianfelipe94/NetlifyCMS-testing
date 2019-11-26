import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Blog = () => (
  <StaticQuery
    query={
      graphql`{
        allMarkdownRemark {
          edges {
            node {
              html
              frontmatter {
                date (formatString: "DD MMMM, YYYY")
                description
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      console.log(data)
      const parsedPosts = data.allMarkdownRemark.edges.map((post) => {
        return (
          <div key={`${post.node.frontmatter.title}-${post.node.frontmatter.date}`}>
            <h2>{post.node.frontmatter.title}</h2>
            <p>{post.node.frontmatter.description}</p>
            <p>{post.node.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: post.node.html}}/>
          </div>
        )
      })
      return (
        <div>
          <h2>Ultimas noticias de Átana</h2>
          {parsedPosts}
        </div>
      )
    }}
  ></StaticQuery>
)

export default Blog