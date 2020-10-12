import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ADJECTIVES, SUBSTANTIVES } from "../constants/ideas";
import Cog from "./Cog";
import { Button, Footer } from "./shared";

const IdeaGenerator = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  width: 100%;
`;
const CogOverlay = styled.div`
  display: grid;
  margin-top: ${(p) => p.marginTop};
`;
const Title = styled.h1`
  margin: 0;
  margin-top: -2rem;
  margin-bottom: 2rem;
  opacity: ${(p) => (p.visible ? 1 : 0)};
  transition: opacity 3000ms ease-in-out;
`;
const Word = styled.div`
  display: flex;
  justify-content: ${(p) => p.justifyContent || "center"};
  align-items: center;
  width: 100%;
`;
const Text = styled.span`
  padding-bottom: 0.3rem;
  border-bottom: ${(p) => (p.useBorder ? "2px solid #b82ad2" : "none")};
`;
const ExitButton = styled(Button)`
  opacity: ${(p) => (p.visible ? 1 : 0)};
  transition: opacity 5000ms ease-in-out;
`;

export const CogWrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-bottom: -0.6rem;
`;

const getRandom = (array) => array[Math.floor(Math.random() * array.length)];

export default ({ handleClick }) => {
  const [adjective, setAdjective] = useState("");
  const [substantive, setSubstantive] = useState("");
  const [stopInner, setStopInner] = useState(false);
  const [stopOuter, setStopOuter] = useState(false);
  const [count, setCount] = useState(0);

  const handleStop = (e, type) => {
    e.stopPropagation();
    if (type === "inner") setStopInner(!stopInner);
    if (type === "outer") setStopOuter(!stopOuter);
  };

  useEffect(() => {
    if (!stopOuter) {
      setAdjective(getRandom(ADJECTIVES));
    }
    if (!stopInner) {
      setSubstantive(getRandom(SUBSTANTIVES));
    }
    setTimeout(() => {
      setCount(count + 1);
    }, 200);
  }, [count, stopInner, stopOuter]);

  const showOuterCog = count > 10;
  const showInnerCog = count > 15;

  return (
    <>
      <Title visible={showOuterCog}>Idea Cogs</Title>
      <IdeaGenerator>
        <Word justifyContent="flex-end">
          {showOuterCog && <Text useBorder={stopOuter}>{adjective}</Text>}
        </Word>
        <CogOverlay>
          {!showOuterCog && (
            <>
              <CogWrapper>
                <Cog
                  toRotation="-360deg"
                  color="#151515"
                  speed={3000}
                  size={`${count / 2}rem`}
                  zIndex={1}
                />
              </CogWrapper>
              <CogWrapper>
                <Cog
                  toRotation="360deg"
                  speed={18000}
                  color="#eee"
                  size={`${count}rem`}
                />
              </CogWrapper>
            </>
          )}
          {showOuterCog && (
            <>
              <CogWrapper>
                <Cog
                  color="#151515"
                  size="5rem"
                  toRotation={`-${stopInner ? 0 : 360}deg`}
                  zIndex={1}
                  speed={3000}
                  onClick={(e) => handleStop(e, "inner")}
                />
              </CogWrapper>
              <CogWrapper>
                <Cog
                  color="white"
                  size="11rem"
                  toRotation={`${stopOuter ? 0 : 360}deg`}
                  speed={5000}
                  onClick={(e) => handleStop(e, "outer")}
                />
              </CogWrapper>
            </>
          )}
        </CogOverlay>
        <Word justifyContent="flex-start">
          {showOuterCog && <Text useBorder={stopInner}>{substantive}</Text>}
        </Word>
      </IdeaGenerator>
      <Footer>
        <ExitButton onClick={handleClick} visible={showInnerCog}>
          Back
        </ExitButton>
      </Footer>
    </>
  );
};
