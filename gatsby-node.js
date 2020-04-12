const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const recipeTemplate = path.resolve(`src/templates/recipe.js`)

  const recipeResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            slug
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

  console.log(recipeResult)

  recipeResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `recipes/${node.slug}`,
      data: node,
      component: recipeTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"
    createPage(page)
  }
}
