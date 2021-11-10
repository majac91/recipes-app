import React, { useEffect } from "react";
import RecipeListCard from "../RecipeListCard/RecipeListCard";

import { retrieveRecipes } from "../../parse/api";
import { Container, Box } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setRecipeList } from "../../redux/recipeList";


const RecipeList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecipesList = async () => {
      const response = await retrieveRecipes();

      dispatch(setRecipeList(response));
    };
    fetchRecipesList();
  }, []);

  const recipeList = useSelector((state) => state.recipeList.recipeList);

  return (
    <Container size='lg' sx={{ mt: 15 }}>
      <Box size='lg' display="grid" gridTemplateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={5}>
        {recipeList &&
          recipeList.map((recipe, index) => {
            return (<RecipeListCard key={index} id={index} recipe={recipe} />);
          })}
      </Box >
    </Container>
  );
};

export default RecipeList;
