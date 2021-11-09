import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Container, Box, List, ListItem, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useConfirm } from 'material-ui-confirm';
import { deleteRecipe } from '../../parse/api'

const Recipe = () => {
  const { id } = useParams();

  const recipe = useSelector((state) =>
    state.recipeList.recipeList.find((post) => post.id === id)
  );

  const confirm = useConfirm();

  const navigate = useNavigate();

  const handleDelete = () => {
    confirm({ description: 'This action is permanent!' })
      .then(() => { deleteRecipe(id) }).then(() => navigate('/')).then(() => window.location.relad())
      .catch((error) => { console.log(error) });
  };

  return <>
    <Container size='lg' sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', mt: 10 }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant='h1' sx={{ mt: 5, mb: 5 }}>{recipe.name}</Typography>
        <Typography sx={{ mb: 3 }} component='div'>
          <Typography sx={{ fontWeight: 'bold' }}>Source:</Typography>
          {recipe.source}</Typography>
        <Typography sx={{ fontWeight: 'bold' }}> Ingredients: </Typography>
        <List>
          {recipe.ingredients.map((ingredient, index) => {
            return <ListItem sx={{ paddingLeft: 0 }} key={index}>{ingredient.name} - {ingredient.quantity}</ListItem>
          })}
        </List>
        <IconButton onClick={handleDelete} aria-label="delete" sx={{ pl: 0 }}>
          <DeleteIcon />
        </IconButton>
      </Box>
      <Box sx={{ flex: 2 }}>
        <Typography>{recipe.instructions}</Typography>
      </Box>
    </Container>
  </>;
};

export default Recipe;
