import React from 'react';
import IngredientForm from './IngredientForm';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientList from './IngredientList';
import { getRecipeFromMistral } from "../ai"

const Main = () => {
  const [ingredient, setIngredient] = React.useState([])

  const [Recipe, setRecipe] = React.useState()

  const [showRecipe, setShowRecipe] = React.useState(false)

  const ingredientListItem = ingredient.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ))
  
  function handleAddIngredient(newIngredient) {
      setIngredient(prevIngredient => ([...prevIngredient, newIngredient]))
  }

  function clearAll() {
    setShowRecipe(prevShow => !prevShow)
    setIngredient([])
  }

  async function handleGetRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredient)
    setRecipe(recipeMarkdown)
    setShowRecipe(prevShow => !prevShow)
  }

  return(
    <main>
      <IngredientForm 
        onAddIngredient = {handleAddIngredient}
        onClearAll = {clearAll}
      />
      <IngredientList 
        ingredient = {ingredient}
        ingredientListItem = {ingredientListItem}
        getRecipe = {handleGetRecipe}
      />
      <ClaudeRecipe 
        showRecipe = {Recipe}
        showRecipeContainer = {showRecipe}
      />   
    </main>
  );
};

export default Main;
