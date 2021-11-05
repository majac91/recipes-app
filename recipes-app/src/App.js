import { useEffect } from "react";
import "./App.css";
import RecipeList from "../src/components/RecipeList/RecipeList";
// import { useSelector, useDispatch } from "react-redux";
// import { setRecipe } from "./redux/recipe";
import Parse from "parse";
import AddRecipe from "./components/AddRecipe/AddRecipe";

function App() {
  useEffect(() => {
    Parse.initialize(
      "XZ6YC9lCXRffIFFOxbbsh9czQjsXofqYYA04UwWA",
      "kNctq60zwQos33cEQaQ6zRLmgo1UtyU9kTAQRLMS"
    );
    Parse.serverURL = "https://parseapi.back4app.com/";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <AddRecipe />
        {/* <RecipeList></RecipeList> */}
      </header>
    </div>
  );
}

export default App;
