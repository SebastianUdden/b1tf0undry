import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 0 1rem;
  min-height: 100vh;
`;
const Header = styled.header`
  max-width: 537px;
  text-align: center;
`;
const Main = styled.main`
  max-width: 537px;
`;
const Img = styled.img`
  pointer-events: none;
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  margin: 0;
  margin-bottom: -0.6rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const H1 = styled.h1`
  text-align: center;
  margin: 0;
`;
const H2 = styled.h2`
  margin: 25px 0 0;
`;
const P = styled.p``;
const UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -45px;
`;
const LI = styled.li``;

export default () => (
  <Wrapper className="App">
    <Header className="App-header">
      <H1>
        b1tf
        <Img src={logo} size="3rem" alt="logo" />
        undry
      </H1>
      <P>
        A small collection of brilliant and motivated individuals, gathering to
        develop new ideas and do brain-workouts on the first sunday of each
        month in a casual hackathon-setting.
      </P>
    </Header>
    <Main>
      <H2>Guiding principles</H2>
      <UL>
        <LI>Have fun</LI>
        <LI>Be creative</LI>
        <LI>Collaborate</LI>
        <LI>Build stuff</LI>
        <LI>Go live!</LI>
      </UL>
    </Main>
  </Wrapper>
);
