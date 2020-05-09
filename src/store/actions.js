import constants from './constants'

// loading recipes
const FETCH_ALL_RECIPES = { type: constants.FETCH_ALL_RECIPES }
const SORT_BY_ALPHA = { type: constants.SORT_BY_ALPHA }
const FILTER_RECIPES = { type: constants.FILTER_RECIPES }

// filtering recipes
const REMOVE_FILTERED_RECIPES = { type: constants.REMOVE_FILTERED_RECIPES }
const DISMISS_SNACKBAR = { type: constants.DISMISS_SNACKBAR }

const actions = {
  FETCH_ALL_RECIPES,
  SORT_BY_ALPHA,
  FILTER_RECIPES,
  REMOVE_FILTERED_RECIPES,
  DISMISS_SNACKBAR
}

export function setCurrentRecipe(recipe) {
  return {
    type: constants.SET_CURRENT_RECIPE,
    recipe
  }
}

export function sortBySubCategory(subcategory, tabValue) {
  return {
    type: constants.SORT_BY_SUBCATEGORY,
    subcategory,
    tabValue
  }
}

export function sortByCategory(category) {
  return {
    type: constants.SORT_BY_CATEGORY,
    category
  }
}

export function onQueryInput(input) {
  return {
    type: constants.QUERY_INPUT,
    input
  }
}

export default actions
