import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { uploadRecipe } from "../../parse/api";
import AddIngredient from "./AddIngredient";
import CustomTimePicker from "./CustomTimePicker";

import styled from "styled-components";

import AddIcon from "@mui/icons-material/Add";

import {
  Fab,
  Modal,
  Box,
  Input,
  TextareaAutosize,
  Button,
} from "@mui/material";

const AddRecipe = () => {
  const ingredientsList = useSelector((state) => state.ingrediendtList);

  const [formValues, setFormValues] = useState({
    name: "",
    source: "",
    time: "",
    instructions: "",
    ingredients: null,
  });

  const [isOpen, setIsOpen] = useState(false);

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
    toggleModal();
  };

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <AddButton
        size="small"
        color="primary"
        aria-label="add"
        onClick={toggleModal}
      >
        <AddIcon />
      </AddButton>

      <RecipeModal
        open={isOpen}
        onClose={toggleModal}
        aria-labelledby="add recipe modal"
        aria-describedby="a form to create a new recipe"
      >
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Box sx={{ pb: 3, textAlign: "center" }}>
            <Input
              sx={{ m: 3, textAlign: "center" }}
              value={formValues.name}
              onChange={(e) => handleFormValues("name", e)}
              type="text"
              placeholder="Recipe Name"
            />
          </Box>

          <AddIngredient />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextareaAutosize
              aria-label="instructions"
              minRows={3}
              placeholder="Write the instructions"
              style={{ width: 300 }}
              value={formValues.instructions}
              onChange={(e) => handleFormValues("instructions", e)}
              type="text"
            />

            <CustomTimePicker
              time={formValues.time}
              handleChange={handleFormValues}
            />

            <Input
              sx={{ m: 3, textAlign: "center" }}
              value={formValues.source}
              onChange={(e) => handleFormValues("source", e)}
              type="text"
              placeholder="Recipe Source"
            />
          </Box>
          <SubmitButton
            variant="outlined"
            type="submit"
            sx={{ alignSelf: "center", mt: 6 }}
          >
            Create
          </SubmitButton>
        </Form>
      </RecipeModal>
    </header>
  );
};

export default AddRecipe;

const AddButton = styled(Fab)`
  && {
    color: black;
    background-color: #fef2e6;
  }
`;

const RecipeModal = styled(Modal)`
   {
    background-color: #eed6ca;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    div {
      background-color: #eed6ca;
    }
  }
`;

const Form = styled.form`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 70vw;
    margin: auto;
  }
`;

const SubmitButton = styled(Button)`
   {
    border-color: black;
    color: black;
  }
`;
