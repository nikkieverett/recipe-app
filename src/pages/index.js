import React from "react"

import RecipeList from "../components/RecipeList"

export default class RecipeIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>All Recipes</h1>
        <section>
          <div className="content">
            <RecipeList />
          </div>
        </section>
      </React.Fragment>
    )
  }
}
