exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  console.log("Function: ", createPage);
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              templateKey
            }
            fields {
              slug
            }
          } 
        }
      }
    }
  `).then((query => {
    console.log("Result is: ", query)
  })).catch(err => {
    console.log("Error is: ", err)
  })
}