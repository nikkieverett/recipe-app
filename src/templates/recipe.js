import React from "react"
import { graphql } from "gatsby"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {

	console.log(data)
  return (
    <div className="blog-post-container">
      <div className="blog-post">

        <div
          className="blog-post-content"
          // dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         slug
//         title
//       }
//     }
//   }
// `
