import constants from './constants'
import getAllRecipes from '../queries/getAllRecipes'

const initialState = {
  allRecipes: [],
  queryInput: '',
  category: '',
  subcategory: '',
  filteredRecipes: [],
  recipesFilteredByCategory: [],
  recipesFilteredBySubcat: [],
  snackBarOpen: false,
  tabValue: 0
}

const sortFunc = arr => {
  arr.sort((a, b) => {
    if (a.node.frontmatter.title.toLowerCase() > b.node.frontmatter.title.toLowerCase()) {
      return 1
    }

    return -1
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ALL_RECIPES: {
      const recipes = getAllRecipes().allMarkdownRemark.edges

      sortFunc(recipes)

      return {
        ...state,
        allRecipes: recipes,
        filteredRecipes: recipes
      }
    }

    case constants.REMOVE_FILTERED_RECIPES: {
      return {
        ...state,
        filteredRecipes: state.allRecipes,
        category: '',
        subcategory: '',
        queryInput: ''
      }
    }

    case constants.SORT_BY_CATEGORY: {
      const catFiltered = state.allRecipes.filter(recipe => {
        return recipe.node.frontmatter.category === action.category
      })

      if (catFiltered.length === 0) {
        return {
          ...state,
          snackBarOpen: true,
          snackBarText: 'No recipes found'
        }
      }

      sortFunc(catFiltered)

      return {
        ...state,
        subcategory: '',
        category: action.category,
        tabValue: 0,
        filteredRecipes: catFiltered
      }
    }

    case constants.SORT_BY_SUBCATEGORY: {
      const subcategoryFiltered = state.filteredRecipes.filter(recipe => {
        return recipe.node.frontmatter.subcategory === action.subcategory
      })

      if (subcategoryFiltered.length === 0) {
        return {
          ...state,
          snackBarOpen: true,
          snackBarText: 'No recipes found'
        }
      }

      sortFunc(subcategoryFiltered)

      return {
        ...state,
        subcategory: action.subcategory,
        tabValue: action.tabValue,
        filteredRecipes: subcategoryFiltered
      }
    }

    case constants.DISMISS_SNACKBAR: {
      return {
        ...state,
        snackBarOpen: false
      }
    }

    case constants.QUERY_INPUT: {
      return {
        ...state,
        queryInput: action.input.toLowerCase()
      }
    }

    case constants.FILTER_RECIPES: {
      const queryFiltered = state.allRecipes.filter(recipe => {
        return recipe.node.frontmatter.title.includes(state.queryInput)
      })

      if (queryFiltered.length === 0) {
        return {
          ...state,
          snackBarOpen: true,
          snackBarText: 'No recipes found'
        }
      }

      return {
        ...state,
        category: '',
        filteredRecipes: queryFiltered
      }
    }

    default:
      return state
  }
}

export default reducer
