import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

import CheckCircle from "@mui/icons-material/CheckCircle";


const RecipeListCard = ({ recipe }) => {
  const ellipsize = require("ellipsize");

  const location = {
    pathname: `/recipe/${recipe.id}`,
    state: recipe,
  };

  return (
    <Link to={location} style={{ textDecoration: 'none', color: '#070707', maxWidth: '30%', width: '100%', mr: 'auto' }}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image="https://images.unsplash.com/photo-1587394214354-a427608f15cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBhc3RhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            alt="pasta"
          />
          <CardContent>
            <Box>
              <Typography gutterBottom variant="overline" component="h2">
                {recipe.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" component="p">
                ID:{recipe.id}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  mt: 3,
                  mb: 1,
                  gap: 4
                }}
              >
                <Typography variant="body1" color="text.secondary" component="p">
                  {recipe.source}
                </Typography>
                <Typography variant="body1" color="text.secondary" component="p">
                  {recipe.time}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography gutterBottom variant="body1" component="p">
                Total ingredients: {recipe.ingredients.length}
              </Typography>
              {recipe.ingredients.map((ingredient, index) => {
                if (recipe.ingredients.length >= 2) {
                  while (index <= 2) {
                    return (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <CheckCircle color='success' sx={{ fontSize: 20 }} />
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="p"
                          sx={{ mb: 0 }}
                        >
                          {ingredient.name}
                          {index === 2 && '...'}
                        </Typography>
                      </Box>
                    );
                  }
                } else {
                  return (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <CheckCircle color='success' sx={{ fontSize: 20 }} />
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="p"
                        sx={{ mb: 0 }}
                      >
                        {ingredient.name}
                      </Typography>
                    </Box>
                  );
                }
              })}

            </Box>
            <Typography variant="body2" color="text.secondary">
              {ellipsize(recipe.instructions, 50)}
            </Typography>
          </CardContent>

        </CardActionArea>
      </Card>
    </Link>

  );
};

export default RecipeListCard;



