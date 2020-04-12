import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <>
      Hello world!
      <p>
        <Link to="/blog">View Blog</Link>
        <Link to="/recipes">View Recipes</Link>
				<Link to="/account">My Account</Link>
      </p>
    </>
  )
}
