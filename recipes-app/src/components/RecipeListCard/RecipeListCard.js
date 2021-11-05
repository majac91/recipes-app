import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { User } from "parse";
import { selectUser } from "../../redux/recipe";

const RecipeListCard = ({ onClick }) => {
  const { recipe } = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(recipe);

  return (
    <div>
      <input id="username" type="text" placeholder="Username" />
      <input id="email" type="email" placeholder="Email" />
      <input id="password" type="password" placeholder="Password" />
      <button onClick={() => onClick()} id="createButton">
        Create User
      </button>
    </div>
  );
};

export default RecipeListCard;
