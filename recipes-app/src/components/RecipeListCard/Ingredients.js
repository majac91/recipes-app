import React from 'react';
import {
    Typography,
    Box,
} from "@mui/material";

import CheckCircle from "@mui/icons-material/CheckCircle";

const Ingredients = ({ recipe }) => {
    return (
        <>
            {recipe.ingredients.map((ingredient, index) => {
                if (recipe.ingredients.length >= 2) {
                    while (index <= 2) {
                        return (
                            <Box key={index} sx={{ display: 'flex' }} mt={2} >
                                <CheckCircle color='success' sx={{ fontSize: 20, mr: 1 }} />
                                <Typography
                                    gutterBottom
                                    variant="body3"
                                    component="p"
                                    color="text.secondary"
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
                        <Box key={index} sx={{ display: 'flex' }} mt={2}>
                            <CheckCircle color='success' sx={{ fontSize: 20, mr: 1 }} />
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
        </>
    );
}

export default Ingredients;
