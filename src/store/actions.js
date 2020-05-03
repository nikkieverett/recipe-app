import constants from './constants'

// loading recipes
const FETCH_ALL_RECIPES = { type: constants.FETCH_ALL_RECIPES }
const SORT_BY_ALPHA = { type: constants.SORT_BY_ALPHA }
const FILTER_RECIPES = { type: constants.FILTER_RECIPES }

// filtering recipes
const QUERY_INPUT = { type: constants.QUERY_INPUT }
const REMOVE_FILTERED_RECIPES = { type: constants.REMOVE_FILTERED_RECIPES }

const actions = {
  FETCH_ALL_RECIPES,
  SORT_BY_ALPHA,
  FILTER_RECIPES,
  QUERY_INPUT,
  REMOVE_FILTERED_RECIPES
}

export function setCurrentRecipe(recipe) {
  return {
    type: constants.SET_CURRENT_RECIPE,
    recipe
  }
}

export function sortBySubCategory(subcategory) {
  return {
    type: constants.SORT_BY_SUBCATEGORY,
    subcategory
  }
}

export function sortByCategory(category) {
  return {
    type: constants.SORT_BY_CATEGORY,
    category
  }
}

export default actions
