import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { RecipeList } from "./RecipesList";
import { mappedRecipe } from "../mocks/recipe";

describe("Recipe List Page", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <RecipeList />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
