const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const recipeTemplate = path.resolve('src/templates/recipe.js')

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
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  recipeResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: recipeTemplate,
      context: {} // additional data can be passed via context
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  console.log('hello1', page)
}

exports.onCreateNode = ({ node }) => {
  const toKebabCase = str =>
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('-')

  // if no path name exists generate path name from title
  if (node.internal.type === 'MarkdownRemark' && !node.frontmatter.path) {
    console.log('hello2', node)
    // eslint-disable-next-line no-param-reassign
    node.frontmatter.path = `/${toKebabCase(node.frontmatter.title)}`

    console.log(node.frontmatter.path)
  }
}
