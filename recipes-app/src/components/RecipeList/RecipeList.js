import React, { useEffect } from "react";
import RecipeListCard from "../RecipeListCard/RecipeListCard";
import { retrieveRecipes } from "../../parse/api";

const RecipeList = () => {
  useEffect(() => {
    retrieveRecipes();
  }, []);

  return (
    <div>
      <RecipeListCard />
    </div>
  );
};

export default RecipeList;
