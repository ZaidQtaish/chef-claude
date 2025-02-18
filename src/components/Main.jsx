import { useState } from "react";
import IngredientsList from "./IngredientsList.jsx";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import { getRecipeFromMistral } from "../../ai.js";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(null);

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    console.log(recipeMarkdown);
    setRecipe(recipeMarkdown);
  }

  return (
    <div className="main-container">
      <main>
        <form className="add-ingredient" action={handleSubmit}>
          <input
            className="ingredient-text"
            name="ingredient"
            placeholder="e.g. oregano"
            required
          />
          <button className="add-button">+ Add ingredient</button>
        </form>
        {ingredients.length > 0 && (
          <IngredientsList ingredients={ingredients} handleClick={getRecipe} />
        )}
        {recipe && <ClaudeRecipe recipe={recipe} />}
      </main>
    </div>
  );
}
