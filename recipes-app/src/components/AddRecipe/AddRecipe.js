import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { uploadRecipe } from "../../parse/api";
import AddIngredient from "./AddIngredient";

const AddRecipe = () => {
  const ingredientsList = useSelector((state) => state.ingrediendtList);

  const [formValues, setFormValues] = useState({
    name: "",
    source: "",
    time: "",
    instructions: "",
    ingredients: null,
  });

  useEffect(() => {
    setFormValues((current) => {
      return { ...current, ingredients: ingredientsList.ingredients };
    });
  }, [ingredientsList]);

  function handleFormValues(key, e) {
    setFormValues((current) => {
      return { ...current, [key]: e.target.value };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadRecipe(formValues);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={formValues.name}
          onChange={(e) => handleFormValues("name", e)}
          type="text"
          placeholder="Recipe Name"
        />
        <input
          value={formValues.source}
          onChange={(e) => handleFormValues("source", e)}
          type="text"
          placeholder="Recipe Source"
        />
        <AddIngredient />
        <input
          value={formValues.time}
          onChange={(e) => handleFormValues("time", e)}
          type="time"
          placeholder="Preparation Time"
        />
        <input
          value={formValues.instructions}
          onChange={(e) => handleFormValues("instructions", e)}
          type="text"
          placeholder="Instructions"
        />
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
