import React, { useState, useEffect } from "react";
import RecipeListCard from "../RecipeListCard/RecipeListCard";

import { retrieveRecipes } from "../../parse/api";
import { Container, Box } from "@mui/material";

import { useDispatch } from "react-redux";
import { setRecipeList } from "../../redux/recipeList";

const RecipeList = () => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecipesList = async () => {
      const response = await retrieveRecipes();

      setList(response);
      dispatch(setRecipeList(response));
    };
    fetchRecipesList();
  }, [dispatch]);

  return (
    <Container size='lg' sx={{ mt: 15 }}>
      <Box size='lg' display="grid" gridTemplateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }} gap={5}>
        {list &&
          list.map((recipe, index) => {
            return (<RecipeListCard key={index} id={index} recipe={recipe} />);
          })}
      </Box >
    </Container>
  );
};

export default RecipeList;
