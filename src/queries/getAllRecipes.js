import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  return useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              servings
              notes
              directions
              ingredients
              rating
              ease
              category
              subcategory
              href
              totalTime
              cookTime
              prepTime
              title
              path
            }
          }
        }
      }
    }
  `)
}
