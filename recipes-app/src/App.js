import "./App.css";
import RecipeList from "../src/components/RecipeList/RecipeList";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import Recipe from "./components/Recipe/Recipe";

import ToolBar from "@mui/material/Toolbar";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ToolBar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <AddRecipe />
        <Link to='/' style={{ margin: "auto", textDecoration: 'none', color: '#070707', fontSize: '2rem' }}>My recipes</Link>
      </ToolBar>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route exact path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
