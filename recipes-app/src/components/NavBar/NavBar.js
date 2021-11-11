import React from 'react';
import ToolBar from "@mui/material/Toolbar";
import AddRecipe from "../AddRecipe/AddRecipe";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavBar = ({ path }) => {
    return (
        <ToolBar sx={{ borderBottom: 1, borderColor: "divider" }}>
            <AddRecipe />
            <NavLink to={path}>My recipes</NavLink>
        </ToolBar>
    );
}

export default NavBar;

const NavLink = styled(Link)`
{
    margin: auto;
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: 400;
    line-height: 2.66;
    letter-spacing: 0.08333em;
    text-transform: uppercase;
    margin-bottom: 0.35em;
    text-decoration: none;
    color: #182124;
;
}
`