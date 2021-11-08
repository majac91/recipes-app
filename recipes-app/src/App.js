import "./App.css";
import RecipeList from "../src/components/RecipeList/RecipeList";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import Recipe from "./components/Recipe/Recipe";

import ToolBar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ToolBar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <AddRecipe />
        <Typography variant="h1" sx={{ margin: "auto" }}>
          My recipes
        </Typography>
      </ToolBar>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route exact path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
