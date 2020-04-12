import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"

class RecipeList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: recipes } = data.allMarkdownRemark

    console.log(recipes)
    return (
      <div className="columns is-multiline">
        {recipes &&
          recipes.map(({ node: recipe }) => (
            <div className="is-parent column is-6" key={recipe.frontmatter.path}>
              <article>
                <header>
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={recipe.frontmatter.path}
                    >
                      {recipe.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                  </p>
                </header>
                <p>
                  <br />
                  <br />
                  <Link className="button" to={recipe.frontmatter.path}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
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
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                id
                directions
                href
                ingredients
                notes
                path
                title
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <RecipeList data={data} count={count} />}
  />
)
