import styled, { keyframes } from "styled-components";

const scale = keyframes`
  to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
`;

export const BouncingLoader = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    width: 1rem;
    height: 1rem;
    margin: 3rem 0.2rem;
    background: #28b88d;
    border-radius: 50%;
    animation: ${scale} 0.6s infinite alternate;
  }

  & > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  & > div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
