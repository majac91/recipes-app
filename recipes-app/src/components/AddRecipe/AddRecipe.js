import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { uploadRecipe } from "../../parse/api";
import AddIngredient from "./AddIngredient";
import CustomTimePicker from "./CustomTimePicker";

import {
  Fab,
  Modal,
  Box,
  Input,
  TextareaAutosize,
  Button,
  List,
  ListItem,
  Typography
} from "@mui/material";

import styled from "styled-components";

import AddIcon from "@mui/icons-material/Add";

const AddRecipe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [time, setTime] = useState('00:00');

  const [formValues, setFormValues] = useState({
    name: "",
    source: "",
    time: "",
    instructions: "",
    ingredients: null,
  });

  const ingredientsList = useSelector((state) => state.ingrediendtList);

  useEffect(() => {
    setFormValues((current) => {
      return { ...current, ingredients: ingredientsList.ingredients };
    });
  }, [ingredientsList]);

  const handleFormValues = (key, e) => {
    setTime(e.target.time);
    setFormValues((current) => {
      return { ...current, [key]: key === 'time' ? formattedTime(e.target.value) : e.target.value };
    });
  }

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
    clearForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    uploadRecipe(formValues);

    toggleModal();

    setTimeout(() => {
      window.location.reload()
    }, 1000);
  };

  const clearForm = () => {
    setFormValues({
      name: "",
      source: "",
      time: "",
      instructions: "",
      ingredients: null,
    })
  }

  const formattedTime = (time) => {
    const [hours, mins] = time.split(":");
    if (hours !== "00") {
      return `${time}h`;
    } else {
      return `${mins}min`;
    }
  };

  return (
    <Box compontent='header'>
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        onClick={toggleModal}
      >
        <AddIcon fontSize={'16px'}
        />
      </Fab>

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

          <Box>
            {formValues.ingredients &&
              <List sx={{ mt: 3 }}>
                <Typography color='secondary'>Ingredients:</Typography>
                {formValues.ingredients.map((ingredient, index) => {
                  return (
                    <ListItem disablePadding key={index}>
                      <Typography>{ingredient.name}</Typography>
                      <Typography>{ingredient.quantity}</Typography>
                    </ListItem>
                  )
                })}
              </List>
            }
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: 'column', alignItems: "flex-start",
              p: 0,
              mt: 5
            }}
          >
            <TextareaAutosize
              aria-label="instructions"
              minRows={5}
              placeholder="Write the instructions"
              style={{ width: '100%', marginBottom: 30 }}
              value={formValues.instructions}
              onChange={(e) => handleFormValues("instructions", e)}
              type="text"
            />
            <CustomTimePicker
              time={time}
              handleChange={handleFormValues}
              style={{ marginBottom: 30 }}
            />
            <Input
              value={formValues.source}
              onChange={(e) => handleFormValues("source", e)}
              type="text"
              placeholder="Recipe Source"
            />
          </Box>
          <Button
            variant="outlined"
            type="submit"
            sx={{ alignSelf: "center", mt: 6 }}
          >
            Create
          </Button>
        </Form>
      </RecipeModal>
    </Box >
  );
};

export default AddRecipe;


const RecipeModal = styled(Modal)`
   {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    margin: auto;
    max-width: 90vw;
    @media (min-width: 768px) {
      max-width: 40vw;
  }
  }
`;

const Form = styled.form`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    background-color: #FFFDF7;
    padding: 50px;
    @media (min-width: 768px) {
    width: 100%;
  }
  }
`;
