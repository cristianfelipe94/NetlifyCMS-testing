const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('src/templates/blogTemplates.js')
  const request = await graphql (`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `)
  if(request.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  } else {
    request.data.allMarkdownRemark.edges.forEach(({node}) => {
      const cleanPath = node.frontmatter.title.replace(/\s/g, "-");
      const lowerPath = cleanPath.toLowerCase();
      const formatedPath = `/${node.frontmatter.path}/${lowerPath}`;
      createPage({
        path: formatedPath,
        component: postTemplate,
        context: {
          title: node.frontmatter.title
        }
      })
    });
  }
}