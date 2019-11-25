exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  console.log("Function: ", createPage);
  return graphql(`
    {
      query MyQuery{
        allMarkdownRemark {
          edges {
            node {
              id
              html
              frontmatter {
                date
                description
                title
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