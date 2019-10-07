import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./Card";
import { CardLabel } from "../styles/CardStyles";

describe("Card Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <Card />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("does not render list of tags if not ", () => {
    const wrapper = mount(
      <Router>
        <Card />
      </Router>
    );

    expect(wrapper.find(CardLabel)).toEqual({});
  });

  it("renders list of tags if present", () => {
    const items = ["one", "two", "three"];
    const wrapper = mount(
      <Router>
        <Card tags={items} />{" "}
      </Router>
    );
    // Expect the wrapper object to be defined
    expect(wrapper.find(CardLabel)).toBeDefined();
    expect(wrapper.find(CardLabel)).toHaveLength(items.length);
  });
});
