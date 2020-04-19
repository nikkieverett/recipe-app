import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  return useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              id
              servings
              notes
              directions
              ingredients
              rating
              ease
              category
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
