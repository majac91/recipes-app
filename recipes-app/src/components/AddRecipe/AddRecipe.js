import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipe } from "../../redux/recipe";
import { createRecipe } from "../../parse/api";
import AddIngredient from "./AddIngredient";

const AddRecipe = ({ onClick }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingrediendtList);

  console.log(ingredients);

  const [formValues, setFormValues] = useState({
    name: "",
    source: "",
    time: "",
    instructions: "",
    ingredients: ingredients,
  });

  function handleFormValues(key, e) {
    setFormValues((current) => {
      return { ...current, [key]: e.target.value };
    });
  }

  const handleAddRecipe = (e) => {
    e.preventDefault();

    dispatch(
      setRecipe({
        name: formValues.name,
        source: formValues.source,
        time: formValues.time,
        instructions: formValues.instructions,
      })
    );

    // createRecipe(formValues);
  };

  return (
    <div>
      <form onSubmit={(e) => handleAddRecipe(e)}>
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
