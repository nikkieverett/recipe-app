import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"

class RecipeList extends React.Component {
  render() {
    const { data } = this.props
    console.log(data)
    return (
      <div className="columns is-multiline">
        {/* {recipes &&
          recipes.map(({ node: recipe }, index) => (
            <div key={index}>{recipe.title}</div>
          ))} */}
      </div>
    )
  }
}

RecipeList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query RecipesQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <RecipeList data={data} count={count} />}
  />
)
