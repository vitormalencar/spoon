import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  height: 56px;
  width: 100%;
  padding: 0;
  left: 0;
  top: 0;
  z-index: 11;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(33, 33, 33, 0.2),
    0 1px 1px 0 rgba(33, 33, 33, 0.14), 0 2px 1px -1px rgba(33, 33, 33, 0.12);
`;

export const Narrow = styled.div`
  width: calc(80px * 12 + 10px * (12));
  margin: 0 auto;
  height: 56px;
  padding: 5px;
`;

export const Logo = styled.div`
  margin: 0;
  padding: 0 16px;
  width: 98px;
  height: 44px;
  background-image: url("https://mscdn.freetls.fastly.net/images/ms/svg/logo-martha-marley-spoon-e532d6d35b.svg");
`;
