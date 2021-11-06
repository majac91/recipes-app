import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setIngredients } from "../../redux/ingredients";

import styled from "styled-components";

import AddIcon from "@mui/icons-material/Add";
import { Checkbox, Input, Fab, Box, Container, Grid } from "@mui/material";

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
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ textAlign: "center" }}
    >
      {ingredients.map((item, index) => {
        return (
          <Grid item xs={6} key={index}>
            <label>{item}</label>
            <Checkbox
              value={item}
              onChange={(e) => handleIngredientValues("name", e)}
              type="checkbox"
            />
            <label>Quantity</label>
            <Input
              onChange={(e) => handleIngredientValues("quantity", e)}
              type="text"
              sx={{ maxWidth: "50px" }}
            />
            <AddButton
              size="small"
              color="primary"
              aria-label="add"
              onClick={handleAddIngredient}
              sx={{ m: 2 }}
            >
              <AddIcon />
            </AddButton>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AddIngredient;

const AddButton = styled(Fab)`
  && {
    color: black;
    background-color: #fef2e6;
  }
`;
