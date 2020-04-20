import constants from './constants'
import getAllRecipes from '../queries/getAllRecipes'

const initialState = {
  allRecipes: [],
  queryInput: '',
  category: '',
  subcategory: '',
  filteredRecipes: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ALL_RECIPES: {
      console.log(getAllRecipes().allMarkdownRemark.edges)
      return {
        ...state,
        allRecipes: getAllRecipes().allMarkdownRemark.edges
      }
    }

    case constants.LOAD_ALL_RECIPES: {
      return {
        ...state,
        category: '',
        subcategory: '',
        queryInput: '',
        filteredRecipes: []
      }
    }

    case constants.QUERY_INPUT: {
      return {
        ...state,
        queryInput: action.queryInput.toLowerCase()
      }
    }

    case constants.SORT_BY_CATEGORY: {
      const catFiltered = state.allRecipes.filter(recipe => {
        return recipe.category === action.category
      })

      if (catFiltered.length === 0) {
        // TODO: add toaster for this
        alert('No matches found')
        return state
      }

      return {
        ...state,
        subcategory: '',
        category: action.category,
        filteredRecipes: catFiltered
      }
    }

    case constants.SORT_BY_SUBCATEGORY: {
      let subcategoryFiltered

      if (state.filteredRecipes.length) {
        subcategoryFiltered = state.filteredRecipes.filter(recipe => {
          return recipe.title.includes(action.subcategory)
        })
      }

      if (subcategoryFiltered.length === 0) {
        // TODO: add toaster for this

        alert('No matches found')
        return state
      }

      return {
        ...state,
        category: action.category,
        subcategory: action.subcategory,
        filteredRecipes: subcategoryFiltered
      }
    }

    case constants.FILTER_RECIPES: {
      const queryFiltered = state.allRecipes.filter(recipe => {
        return recipe.title.includes(state.queryInput)
      })

      if (queryFiltered.length === 0) {
        alert('No matches found')
        return state
      }

      return {
        ...state,
        category: '',
        filteredRecipes: queryFiltered
      }
    }

    case constants.SORT_BY_ALPHA: {
      const sortFunc = arr => {
        arr.sort((a, b) => {
          if (a.title > b.title) {
            return 1
          }

          return -1
        })
      }

      sortFunc(state.allRecipes)

      if (state.filteredRecipes !== []) {
        sortFunc(state.filteredRecipes)
      }

      return {
        ...state,
        allRecipes: state.allRecipes,
        filteredRecipes: state.filteredRecipes
      }
    }

    case constants.REMOVE_FILTERED_RECIPES: {
      return {
        ...state,
        breadcrumbs: [],
        filteredRecipes: [],
        category: ''
      }
    }

    default:
      return state
  }
}

export default reducer
