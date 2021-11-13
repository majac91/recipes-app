import Parse from "parse";

Parse.initialize(
  "XZ6YC9lCXRffIFFOxbbsh9czQjsXofqYYA04UwWA",
  "kNctq60zwQos33cEQaQ6zRLmgo1UtyU9kTAQRLMS"
);
Parse.serverURL = "https://parseapi.back4app.com/";


// Create a new recipe
export async function uploadRecipe(values) {
  if (values.ingredients.length < 1) {
    alert('Enter at least one ingredient')
    return;
  }
  let recipe = new Parse.Object("Recipe");

  recipe.set("name", values.name);
  recipe.set("source", values.source);
  recipe.set("ingredients", values.ingredients);
  recipe.set("time", values.time);
  recipe.set("instructions", values.instructions);

  try {
    recipe = await recipe.save();
    if (recipe !== null) {
      console.log(`New object created with success! ObjectId: ${recipe.id}`);
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

// Get the recipe list
export async function retrieveRecipes() {
  const Recipes = Parse.Object.extend("Recipe");
  const query = new Parse.Query(Recipes);

  const retreivedList = [];

  try {
    const recipesQuery = await query.find();

    for (let i = 0; i < recipesQuery.length; i++) {
      let object = recipesQuery[i];
      let id = object.id;
      let name = object.get("name");
      let source = object.get("source");
      let ingredients = object.get("ingredients");
      let time = object.get("time");
      let instructions = object.get("instructions");
      let listItem = { id, name, source, ingredients, time, instructions };

      retreivedList.push(listItem);
    }

    return retreivedList;

  } catch {
    alert(`Error`);
  }
}

export async function deleteRecipe(id) {
  const Recipe = Parse.Object.extend("Recipe");
  const query = new Parse.Query(Recipe);
  query.equalTo("objectId", id);
  const deleteQuery = await query.find();

  try {
    await deleteQuery[0].destroy();
    console.log("The object was deleted successfully.");
    window.location.reload();
  } catch (e) {
    console.log("Delete failed!", e);
  }


}