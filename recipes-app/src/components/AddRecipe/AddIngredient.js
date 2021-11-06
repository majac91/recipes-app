import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setIngredients } from "../../redux/ingredients";

const AddIngredient = () => {
  const ingredients = [
    "Flour",
    "Milk",
    "Oil",
    "Salt",
    "Sugar",
    "Eggs",
    "Tomatoes",
    "Peppers",
    "Cheese",
    "Potatoes",
    "Meat",
  ];

  const dispatch = useDispatch();

  const [ingredient, setIngredient] = useState({
    name: "",
    quantity: "",
  });

  function handleIngredientValues(key, e) {
    setIngredient((current) => {
      return { ...current, [key]: e.target.value };
    });
  }

  function handleAddIngredient() {
    dispatch(
      setIngredients({
        selectedIngredients: ingredient,
      })
    );
  }

  return (
    <>
      {ingredients.map((item, index) => {
        return (
          <div key={index}>
            <label>{item}</label>
            <input
              value={item}
              onChange={(e) => handleIngredientValues("name", e)}
              type="checkbox"
            />
            <label>Quantity</label>
            <input
              onChange={(e) => handleIngredientValues("quantity", e)}
              type="text"
            />
            <button type="button" onClick={handleAddIngredient}>
              +
            </button>
          </div>
        );
      })}
    </>
  );
};

export default AddIngredient;
