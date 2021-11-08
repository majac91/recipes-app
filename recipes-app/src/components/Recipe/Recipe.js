import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();

  const recipe = useSelector((state) =>
    state.recipeList.recipeList.find((post) => post.id === id)
  );

  return <div>{recipe.name}</div>;
};

export default Recipe;
