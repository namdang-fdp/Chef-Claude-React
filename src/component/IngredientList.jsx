const IngredientList = (props) => {
    return (
        <>
        {props.ingredient.length > 0 ? <section className="mt-8 max-w-2xl mx-auto bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Ingredients on hand:</h2>
            <ul
              className="ingredients-list list-disc list-inside space-y-2 mb-6 text-gray-800"
              aria-live="polite"
            >
              {props.ingredientListItem}
            </ul>
            {props.ingredient.length >= 3 ? <div className="get-recipe-container flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 rounded-lg">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold">Ready for a recipe?</h3>
                <p className="text-gray-700">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>
              <button
                onClick={() => props.getRecipe()}
                className="bg-[#D17557] hover:bg-[#BC694E] text-white font-bold py-2 px-6 rounded transition duration-200"
              >
                Get a recipe
              </button>
            </div> : null}
        </section> : null}
        </>
    )
}


export default IngredientList;