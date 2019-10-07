import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Recipe from "./pages/RecipeDetail";
import { RecipeList } from "./pages/RecipesList";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/Header";

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Router>
      <Header />
      <Switch>
        <Route path="/recipe">
          <Recipe />
        </Route>
        <Route path="/">
          <RecipeList />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
