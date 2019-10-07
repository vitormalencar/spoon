import styled from "styled-components";

export const CardListContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: block;
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CardItem = styled.li`
  display: flex;
  padding: 1rem;
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3333%;
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    filter: contrast(100%);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;

export const CardImage = styled.img`
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(80%);
  overflow: hidden;
  position: relative;
  transition: -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1rem;
  color: #2d2926;
  margin: 0 0px 5px;
`;

export const CardSubTitle = styled.h3`
  font-size: 14px;
  margin: 0 0 24px;
  color: #413b38;
  font-weight: 400;
`;

export const CardDescription = styled.div`
  margin-bottom: 30px;
  font-weight: 400px;
`;

export const CardDescriptionTitle = styled.h3`
  font-size: 16px;
  color: #000;
`;

export const CardLabels = styled.div`
  color: #716d6a;
  font-size: 12px;
  line-height: 1.5;
  list-style: none;
  margin: 0 0 10px;
`;

export const CardLabel = styled.div`
  margin: 0 2px 5px 0;
  background-color: #f6f6f6;
  color: #716d6a;
  display: inline-block;
  font-size: 10px;
  letter-spacing: 1px;
  line-height: 1.5;
  padding: 5px;
  text-transform: uppercase;
`;

export const CardAuthor = styled.div`
  display: flex;
  align-items: center;
`;

export const CardAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export const CardAuthorInfo = styled.div`
  padding-left: 1em;
  display: block;
`;
