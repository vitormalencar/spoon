import React from "react";

import Card from "../components/Card";
import HeaderTitle from "../components/HeaderTitle";
import { useRecipes } from "../hooks/useRecipes";

export function RecipeList() {
  const [{ recipes, isLoading, isError }] = useRecipes();
  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      <HeaderTitle title={"Our weekly menu"} />
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="cards-wrapper">
          <ul className="cards">
            {recipes.map(item => (
              <li className="cards__item">
                <Card {...item} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
