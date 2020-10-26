import styled from "styled-components";
import { colors } from "../constants/colors";

export const H1 = styled.h1`
  text-align: center;
  padding: 1rem;
  margin: 0;
  cursor: pointer;
  z-index: 100;
  background-color: ${colors.background};
`;
export const H2 = styled.h2`
  text-align: center;
  font-size: 1.7rem;
  margin: 0 0 2vh;
`;
export const P = styled.p`
  margin: 0 0 3vh;
  text-align: center;
`;
export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 5vh;
  margin-left: -30px;
`;
export const LI = styled.li``;
export const Button = styled.button`
  background-color: inherit;
  color: white;
  border: none;
  border-bottom: 1px solid white;
  padding: 0.1rem 0;
  font-size: calc(16px + 1vmin);
  margin: 0;
  cursor: pointer;
  ${(p) =>
    p.normal &&
    `
    padding: 0;
    margin: 0;
    font-size: inherit;
  `}
`;
export const CTA = styled.button`
  background-color: inherit;
  color: white;
  border: 1px solid white;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: calc(16px + 1vmin);
`;
export const Link = styled.a`
  background-color: inherit;
  color: white;
  border: 1px solid white;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  font-size: calc(16px + 1vmin);
`;
export const Constraint = styled.div`
  max-width: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
