import React, { useState } from "react";
import styled from "styled-components";
import Cog from "./Cog";
import { Button, Constraint, Footer, H1, H2, LI, P, UL } from "./shared";

const Home = styled.div`
  opacity: ${(p) => (!p.visible ? 0 : 1)};
  transition: opacity 300ms ease-in-out;
`;
const Header = styled.header`
  text-align: center;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;

export default ({ changeTab }) => {
  const [hideText, setHideText] = useState(false);

  const onCogClick = () => {
    setHideText(true);
    setTimeout(() => {
      changeTab("idea-generator");
    }, 300);
  };
  return (
    <Constraint>
      <Home visible={!hideText}>
        <Header>
          <H1 onClick={() => changeTab("home")}>
            b1tf
            <Cog
              color="white"
              size="calc(21px + 2vmin)"
              margin="0 0 -0.23rem 0"
              onClick={onCogClick}
            />
            undry
          </H1>
          <P>
            A small collection of brilliant and motivated individuals, gathering
            to develop new ideas and do brain-workouts on the first sunday of each
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
          <Footer>
            <Button onClick={() => changeTab("about")}>I'm intrigued...</Button>
          </Footer>
        </Main>
      </Home>
    </Constraint>
  );
};
