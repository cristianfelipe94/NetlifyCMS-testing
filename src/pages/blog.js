import React from "react"
import Link from "gatsby"
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
                description
                title
                path
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const parsedPosts = data.allMarkdownRemark.edges.map((post) => {
        const titlePost = post.node.frontmatter.title;
        const lowerTitle =  titlePost.toLowerCase();
        const clearTitle = lowerTitle.replace(/\s/g, "-")
        const path = `/${post.node.frontmatter.date}-${clearTitle}`;
        return (
          <Link to={path} key={`${post.node.frontmatter.title}-${post.node.frontmatter.date}`}>
            <h2>{post.node.frontmatter.title}</h2>
            <p>{post.node.frontmatter.description}</p>
            <p>{post.node.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: post.node.html}}/>
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