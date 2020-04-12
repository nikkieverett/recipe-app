const fs = require("fs")
const recipes = require('./src/data/recipes.json')

const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
		.join("-")

const storeData = data => {
  try {
    fs.writeFileSync(`${__dirname}/recipes-test/${data.slug}.md`, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

recipes.forEach(recipe => {
	recipe.slug = toKebabCase(recipe.title)
	storeData(recipe)
})