import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setIngredients } from "../../redux/ingredients";

const AddIngredient = () => {
  const dispatch = useDispatch();

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

  const [ingredient, setIngredient] = useState({
    name: "",
    quantity: "",
  });

  function handleFormValues(key, e) {
    setIngredient((current) => {
      return { ...current, [key]: e.target.value };
    });
  }

  function handleAddQuantity() {
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
              onChange={(e) => handleFormValues("name", e)}
              type="checkbox"
            />
            <label>Quantity</label>
            <input
              onChange={(e) => handleFormValues("quantity", e)}
              type="text"
            />
            <button onClick={handleAddQuantity}>+</button>
          </div>
        );
      })}
    </>
  );
};

export default AddIngredient;
