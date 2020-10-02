import React, { useState } from "react";
import styled from "styled-components";
import Cog from "./Cog";

const Home = styled.div`
  opacity: ${(p) => (!p.visible ? 0 : 1)};
  transition: opacity 300ms ease-in-out;
`;
const Header = styled.header`
  max-width: 537px;
  text-align: center;
`;
const Main = styled.main`
  max-width: 537px;
`;
const H1 = styled.h1`
  text-align: center;
  margin: 0;
`;
const H2 = styled.h2`
  text-align: center;
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

export default ({ handleClick }) => {
  const [hideText, setHideText] = useState(false);

  const onCogClick = () => {
    setHideText(true);
    setTimeout(() => {
      handleClick();
    }, 300);
  };
  return (
    <Home visible={!hideText}>
      <Header>
        <H1 onClick={onCogClick}>
          b1tf
          <Cog
            color="white"
            size="calc(21px + 2vmin)"
            margin="0 0 -0.23rem 0"
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
      </Main>
    </Home>
  );
};
