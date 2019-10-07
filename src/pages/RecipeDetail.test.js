import React from "react";
import ReactDOM from "react-dom";
import Recipe from "./RecipeDetail";
import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Recipe />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
