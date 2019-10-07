import styled from "styled-components";

export const RecipeContainer = styled.div`
  overflow: hidden;
  border-radius: 4px;
  box-sizing: content-box;
  margin: 40px auto 30px;

  @media only screen and (min-width: 720px) and (max-width: 1079px),
    only screen and (min-width: 1080px) {
    max-width: 800px;
  }
`;
