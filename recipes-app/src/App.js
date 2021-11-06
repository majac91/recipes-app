import "./App.css";
import RecipeList from "../src/components/RecipeList/RecipeList";
import AddRecipe from "./components/AddRecipe/AddRecipe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddRecipe />
        <RecipeList></RecipeList>
      </header>
    </div>
  );
}

export default App;
