import "./App.css";
import RecipeList from "../src/components/RecipeList/RecipeList";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import ToolBar from "@mui/material/Toolbar";
// import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
console.log(theme);
function App() {
  return (
    <div className="App">
      <ToolBar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <AddRecipe />
      </ToolBar>
      <h1>My Recipes</h1>

      <RecipeList></RecipeList>
    </div>
  );
}

export default App;
