import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useConfirm } from 'material-ui-confirm';
import { deleteRecipe } from '../../parse/api'

import { Typography, Container, Box, List, ListItem, IconButton, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import styled from 'styled-components';

const Recipe = () => {
  const { id } = useParams();

  const recipe = useSelector((state) =>
    state.recipeList.recipeList.find((post) => post.id === id)
  );

  const confirm = useConfirm();

  const navigate = useNavigate();

  const handleDelete = () => {
    confirm({ description: 'This action is permanent!' })
      .then(() => { deleteRecipe(id) }).then(() => navigate('/'))
      .catch((error) => { console.log(error) });
  };

  return (
    <Container size='lg'>
      <Wrapper size='lg' direction={{ xs: 'column', sm: 'row' }} >
        <SideBar>
          <Typography variant='h1' sx={{ mt: 5, mb: 5 }}>{recipe.name}</Typography>
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontWeight: 'bold' }}>Source:</Typography>
            {recipe.source}
          </Box>
          <Typography sx={{ fontWeight: 'bold' }}> Ingredients: </Typography>
          <List>
            {recipe.ingredients.map((ingredient, index) => {
              return <ListItem sx={{ paddingLeft: 0 }} key={index}>{ingredient.name} - {ingredient.quantity}</ListItem>
            })}
          </List>
          <IconButton onClick={handleDelete} aria-label="delete" sx={{ pl: 0 }}>
            <DeleteIcon />
          </IconButton>
        </SideBar>
        <Main>
          <Typography variant='overline' component='h2' sx={{ mt: 5, mb: 5 }} >Preparation:</Typography>
          <Typography component='p'>{recipe.instructions}</Typography>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Recipe;


const Wrapper = styled(Stack)`{
  display: flex; 
  flex-wrap: wrap;
  margin: 100px 0;
  @media(min-width: 526px) {
    gap: 80px;
  }
  @media(min-width: 768px) {
    gap: 100px;
  }
}`

const SideBar = styled(Box)`{
flex: 1;
border-top: 1px solid black;
border-bottom: 1px solid black;
}`

const Main = styled(Box)`{
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: flex-start;
}`