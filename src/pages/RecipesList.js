// @flow
import React from "react";

import Card from "../components/Card";
import { Title } from "../styles/TitleStyles";
import { useRecipes } from "../hooks/useRecipes";
import BouncingLoader from "../components/BouncingLoader";
import { CardList, CardItem, CardListContainer } from "../styles/CardStyles";

export function RecipeList() {
  const [{ recipes, isLoading, isError }] = useRecipes();
  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      <Title>Our weekly menu</Title>
      {isLoading ? (
        <BouncingLoader />
      ) : (
        <CardListContainer>
          <CardList>
            {recipes.map((item, index) => (
              <CardItem key={index}>
                <Card {...item} />
              </CardItem>
            ))}
          </CardList>
        </CardListContainer>
      )}
    </div>
  );
}
