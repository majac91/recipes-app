import "./App.css";
import RecipeList from "../src/components/RecipeList/RecipeList";
import Recipe from "./components/Recipe/Recipe";
import NavBar from "./components/NavBar/NavBar"


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar path={'/'}></NavBar>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route exact path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
