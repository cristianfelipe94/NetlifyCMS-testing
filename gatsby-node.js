const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('src/templates/blogTemplates.js')
  return graphql(`
    {
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
  `).then((query => {
    if (query.errors) {
      return Promise.reject
    } else {
      query.data.allMarkdownRemark.edges.forEach(element => {
        const titlePost = element.node.frontmatter.title;
        const lowerTitle =  titlePost.toLowerCase();
        const clearTitle = lowerTitle.replace(/\s/g, "-")
        const pathFormated = `/${element.node.frontmatter.date}-${clearTitle}`;
        createPage({
          path: pathFormated,
          component: postTemplate
        })
      });
    }
  }))
}