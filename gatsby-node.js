const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const recipeTemplate = path.resolve(`src/templates/recipe.js`)

  const recipeResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (recipeResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  recipeResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: recipeTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  console.log(page)
}