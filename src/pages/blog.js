import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

const Blog = () => (
  <StaticQuery
    query={
      graphql` {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  postImage
                  date
                  description
                  path
                  title
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      console.log(data);
      const parsedPosts = data.allFile.edges.map((post) => {
        const {frontmatter} = post.node.childMarkdownRemark;
        const cleanPath = frontmatter.title.replace(/\s/g, "-");
        const formatedPath = cleanPath.toLowerCase();
        const path = `/${frontmatter.path}/${formatedPath}`;
        return (
          <Link to={path} key={`${frontmatter.title}-${frontmatter.date}`}>
            <img src={frontmatter.postImage}/>
            <h2>{frontmatter.title}</h2>
            <p>{frontmatter.description}</p>
            <p>Esta publicación fue creada: <span>{frontmatter.date}</span></p>
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