import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  const deleteRepcipe = (indexToDelete) =>
  setRecipes((currRecipes) =>
  currRecipes.filter((post, index) => index !== indexToDelete)
  );
  
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const createRecipe = (newRecipe) => setRecipes((currentrecipes) => [...currentrecipes, newRecipe]);
  console.log(recipes);

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRepcipe={deleteRepcipe}/>
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
