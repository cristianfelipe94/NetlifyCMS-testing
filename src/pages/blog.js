import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Blog = () => (
  <StaticQuery
    query={
      graphql`{
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                date
                description
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const parsedPosts = data.allMarkdownRemark.edges.map((post) => {
        return (
          <div>
            <h2>{post.node.frontmatter.title}</h2>
            <p>{post.node.frontmatter.description}</p>
            <p>{post.node.frontmatter.date}</p>
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