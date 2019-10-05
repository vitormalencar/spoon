// @flow
import { createClient } from "contentful";
import { API_SPACE_ID, API_TOKEN } from "./config";
import { mapRecipe } from "../lib";

const client = createClient({ space: API_SPACE_ID, accessToken: API_TOKEN });

const recipeEntrie = {
  content_type: "recipe",
  select: "sys.id,fields"
};

export const fetchtRecipes = () =>
  client.getEntries(recipeEntrie).then(({ items }) => items.map(mapRecipe));
