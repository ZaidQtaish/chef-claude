/* eslint-disable react/prop-types */
export default function IngredientsList(props) {
  const ingredientListElements = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <>
      <div className="ingredients-container">
        <h1 className="ingredients-title">Ingredients on hand:</h1>
        <ul>{ingredientListElements}</ul>
      </div>

      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button id="btn-get-recipe" onClick={props.handleClick}>
            Get a recipe
          </button>
        </div>
      )}
    </>
  );
}
