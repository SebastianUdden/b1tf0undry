import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  margin: 1rem;
  cursor: pointer;
`;
export const H2 = styled.h2`
  text-align: center;
  font-size: 1.7rem;
  margin: 25px 0 0;
`;
export const P = styled.p`
  text-align: center;
`;
export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -45px;
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
  margin: 0.5rem;
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
`;
export const Constraint = styled.div`
  max-width: 540px;
  margin-top: 100px;
`;
