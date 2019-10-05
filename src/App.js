import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useReactRouter from "use-react-router";

import Card from "./components/Card";
import { RecipeList } from "./pages/RecipesList";
import "./App.css";

function Recipe() {
  const { location } = useReactRouter();
  const { state } = location;
  return <Card {...state} />;
}

function App() {
  return (
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
  );
}

export default App;
