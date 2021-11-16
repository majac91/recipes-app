import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setIngredients } from "../../redux/ingredients";

import styled from "styled-components";

import AddIcon from "@mui/icons-material/Add";
import {
  Input, Fab, FormControl, InputLabel, Select, MenuItem, Box
} from "@mui/material";

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
    <>
      <FormControl fullWidth >
        <InputLabel id="ingredients">Ingredient</InputLabel>
        <Select
          labelId="ingredients"
          id="ingredients"
          value={ingredient.name}
          label="Age"
          onChange={(e) => handleIngredientValues("name", e)}
        >
          {ingredients.map((item, index) => {
            return (
              <MenuItem value={item} key={index}>{item}</MenuItem>

            );
          })}
        </Select>
      </FormControl>
      <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
        <Input
          placeholder='Quantity'
          onChange={(e) => handleIngredientValues("quantity", e)}
          type="text"
          sx={{ maxWidth: "100px" }}
        />
        <AddButton
          aria-label="add"
          onClick={handleAddIngredient}
        >
          <AddIcon sx={{ width: '12x', height: '12px' }} />
        </AddButton>
      </Box>
    </>
  );
};

export default AddIngredient;

const AddButton = styled(Fab)`
  && {
    color: black;
    background-color: #fef2e6;
    width: 38px;
    height: 38px;
  }
`;
