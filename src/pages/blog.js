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
              excerpt(pruneLength: 100)
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
        const {frontmatter, excerpt} = post.node;
        const cleanPath = frontmatter.title.replace(/\s/g, "-");
        const formatedPath = cleanPath.toLowerCase();
        const path = `/${formatedPath}`;
        return (
          <Link to={path} key={`${frontmatter.title}-${frontmatter.date}`}>
            <h2>{frontmatter.title}</h2>
            <p>{excerpt}</p>
            <p>Esta publicación fue creada: <span>{frontmatter.date}</span></p>
            <p>Esta publicación fue creada por: <span>{frontmatter.author}</span></p>
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