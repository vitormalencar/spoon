import React from "react";
import { Link } from "react-router-dom";
import { Header, Narrow, Logo } from "../styles/HeaderStyle";

export default () => {
  return (
    <Header>
      <Narrow>
        <Link to="/">
          <Logo />
        </Link>
      </Narrow>
    </Header>
  );
};
