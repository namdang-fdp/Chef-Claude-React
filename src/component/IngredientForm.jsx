import React from 'react';

const IngredientForm = ({onAddIngredient, onClearAll}) => {

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const ingredient = formData.get("ingredients")
        console.log(ingredient)
        if(ingredient) {
            onAddIngredient(ingredient)
            event.target.reset();
        }
    }

    return (
        <div className="max-w-lg mx-auto mt-8 p-1">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2" method="POST">
                <input
                type="text"
                placeholder="e.g Pork"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:from-black"
                name="ingredients"
                />
                <div className="flex space-x-2">
                    <button
                        type="submit"
                        className="flex-shrink-0 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                        + Add ingredient
                    </button>
                    <button 
                        type="button"
                        onClick={onClearAll}
                        className="flex-shrink-0 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                        Clear All
                    </button>
                </div>
            </form>
        </div>
    );
};

export default IngredientForm;
