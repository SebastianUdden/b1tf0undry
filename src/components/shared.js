import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  cursor: pointer;
`;
export const H2 = styled.h2`
  text-align: center;
  font-size: 2rem;
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
export const Footer = styled.footer`
  position: fixed;
  background-color: #282c34;
  bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Button = styled.button`
  background-color: inherit;
  color: white;
  border: none;
  border-bottom: 1px solid white;
  padding: 0.1rem 0;
  margin: 0.5rem;
  cursor: pointer;
  ${(p) =>
    p.normal &&
    `
    padding: 0;
    margin: 0;
    font-size: inherit;
  `}
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
`;
