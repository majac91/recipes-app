import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";

const RecipeListCard = ({ recipe }) => {
  const ellipsize = require("ellipsize");

  const formattedTime = () => {
    const [hours, mins] = recipe.time.split(":");
    if (hours !== "00") {
      return `${recipe.time}h`;
    } else {
      return `${mins}min`;
    }
  };

  const location = {
    pathname: `/recipe/${recipe.id}`,
    state: recipe,
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to={location}>
          <CardMedia
            component="img"
            height="160"
            image="https://images.unsplash.com/photo-1587394214354-a427608f15cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBhc3RhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            alt="green iguana"
          />
          <CardContent>
            <Box>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  mt: 3,
                  mb: 1,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {recipe.source}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formattedTime()}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography gutterBottom variant="overline" component="div">
                Number of ingredients: {recipe.ingredients.length}
              </Typography>
              {recipe.ingredients.map((ingredient, index) => {
                if (recipe.ingredients.length >= 2) {
                  while (index <= 2) {
                    return (
                      <Typography
                        key={index}
                        gutterBottom
                        variant="body2"
                        component="div"
                      >
                        {ingredient.name}
                        {index === 2 && <p>...</p>}
                      </Typography>
                    );
                  }
                } else {
                  return (
                    <Typography
                      key={index}
                      gutterBottom
                      variant="body2"
                      component="div"
                    >
                      {ingredient.name}
                    </Typography>
                  );
                }
              })}
            </Box>
            <Typography variant="body2" color="text.secondary">
              {ellipsize(recipe.instructions, 50)}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>

      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default RecipeListCard;
