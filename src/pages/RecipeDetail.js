// @flow
import React from "react";
import useReactRouter from "use-react-router";
import CardDetails from "../components/CardDetails";
import { RecipeContainer } from "../styles/RecipeStyles";

export default function Recipe() {
  const { location } = useReactRouter();
  const { state } = location;
  return (
    <RecipeContainer>
      <CardDetails {...state} />
    </RecipeContainer>
  );
}
