import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'

// this prop will be injected by the GraphQL query below.
export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        {/* {frontmatter.servings && <h5>Servings: {frontmatter.servings}</h5>} */}
        {frontmatter.rating && <h5>Rating: {frontmatter.rating}</h5>}
        {frontmatter.ease && <h5>Difficulty: {frontmatter.ease}</h5>}
        {frontmatter.category && <h5>Category: {frontmatter.category}</h5>}
        {frontmatter.href && <h5>Link: {frontmatter.href}</h5>}
        {frontmatter.totalTime && <h5>Total Time: {frontmatter.totalTime}</h5>}
        {frontmatter.cookTime && <h5>Cook Time: {frontmatter.cookTime}</h5>}
        {frontmatter.prepTime && <h5>Prep Time: {frontmatter.prepTime}</h5>}
        <div className="blog-post-content">
          <ReactMarkdown source={frontmatter.directions} />
          <ReactMarkdown source={frontmatter.ingredients} />
          <ReactMarkdown source={frontmatter.notes} />
        </div>
      </div>
    </div>
  )
}

Template.propTypes = {
  data: PropTypes.any
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        directions
        ingredients
        rating
        category
        subcategory
        ease
        href
        notes
        totalTime
        prepTime
        cookTime
      }
    }
  }
`
