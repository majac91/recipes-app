import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setIngredients } from "../../redux/ingredients";

const AddIngredient = () => {
  const dispatch = useDispatch();

  const ingredients = [
    "Flour",
    "Milk",
    "Oil",
    "Salt",
    "Sugar",
    "Eggs",
    "Tomatoes",
    "Peppers",
    "Cheese",
    "Potatoes",
    "Meat",
  ];

  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const [quantities, setQuantities] = useState();
  const [input, setInput] = useState(""); // '' is the initial state value

  const quantityRef = useRef();

  useEffect(() => {
    dispatch(
      setIngredients({
        selectedIngredients,
      })
    );
  }, [dispatch, selectedIngredients]);

  console.log(selectedIngredients);
  function handleSelectedIngredients(e) {
    setSelectedIngredients((prev) => {
      return [...prev, e.target.value];
    });
  }

  function handleAddQuantity(e) {
    console.log(quantityRef.current);
  }

  return (
    <>
      {ingredients.map((item, index) => {
        return (
          <div key={index}>
            <label>{item}</label>
            <input
              onChange={handleSelectedIngredients}
              value={item}
              type="checkbox"
            ></input>
            <label>Quantity</label>
            <input ref={quantityRef} type="text" />
            <button onClick={handleAddQuantity}>+</button>
          </div>
        );
      })}
    </>
  );
};

export default AddIngredient;
