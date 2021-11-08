import React, { useState, useEffect } from "react";
import RecipeListCard from "../RecipeListCard/RecipeListCard";

import { retrieveRecipes } from "../../parse/api";
import { Container } from "@mui/material";

import { useDispatch } from "react-redux";
import { setRecipeList } from "../../redux/recipeList";

const RecipeList = () => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecipesList = async () => {
      const response = await retrieveRecipes();
      if (response) {
        setList(response);
        dispatch(setRecipeList(response));
      }
    };
    fetchRecipesList();
  }, [dispatch]);

  return (
    <Container size="lg">
      {list &&
        list.map((recipe, index) => {
          return <RecipeListCard key={index} id={index} recipe={recipe} />;
        })}
    </Container>
  );
};

export default RecipeList;
