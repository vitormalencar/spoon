import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import ReactDOM from "react-dom";
import CardDetails from "./CardDetails";
import { CardLabel } from "../styles/CardStyles";

describe("Card Details", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <CardDetails />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("does not render list of tags if not ", () => {
    const wrapper = mount(
      <Router>
        <CardDetails />
      </Router>
    );

    expect(wrapper.find(CardLabel)).toEqual({});
  });

  it("renders list of tags if present", () => {
    const items = ["one", "two", "three"];
    const wrapper = mount(
      <Router>
        <CardDetails tags={items} />{" "}
      </Router>
    );
    // Expect the wrapper object to be defined
    expect(wrapper.find(CardLabel)).toBeDefined();
    expect(wrapper.find(CardLabel)).toHaveLength(items.length);
  });
});
