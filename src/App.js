import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Recipe from "./pages/RecipeDetail";
import { RecipeList } from "./pages/RecipesList";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Header, Logo, Narrow } from "./styles/HeaderStyle";

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Header>
      <Narrow>
        <Logo />
      </Narrow>
    </Header>
    <Router>
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
