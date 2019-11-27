import React from "react"
import { Link } from "gatsby"
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
                date (formatString: "YYYY-MM-DD")
                title
                author
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const parsedPosts = data.allMarkdownRemark.edges.map((post) => {
        const {html, frontmatter} = post.node;
        const path = `/${frontmatter.title}`;
        return (
          <Link to={path} key={`${frontmatter.title}-${frontmatter.date}`}>
            <h2>{frontmatter.title}</h2>
            <p>{frontmatter.description}</p>
            <p>{frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: html}}/>
          </Link>
        )
      })
      return (
        <div>
          <h2>Ultimas noticias de Átana.</h2>
          {parsedPosts}
        </div>
      )
    }}
  ></StaticQuery>
)

export default Blog