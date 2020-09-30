import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ADJECTIVES, SUBSTANTIVES } from "../constants/ideas";
import Cog from "./Cog";

const IdeaGenerator = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  width: 100%;
`;
const CogOverlay = styled.div`
  display: grid;
`;
const Title = styled.h1`
  margin-top: -4rem;
  margin-bottom: 4rem;
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
const ExitButton = styled.button`
  background-color: inherit;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  margin-top: 5rem;
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
  const [count, setCount] = useState(0);
  const [stopInner, setStopInner] = useState(false);
  const [stopOuter, setStopOuter] = useState(false);

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
  }, [count]);

  return (
    <>
      <Title>Idea Cogs</Title>
      <IdeaGenerator>
        <Word justifyContent="flex-end">
          <Text useBorder={stopOuter}>{adjective}</Text>
        </Word>
        <CogOverlay>
          <CogWrapper>
            <Cog
              color="#151515"
              size="5rem"
              fromRotation="0deg"
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
        </CogOverlay>
        <Word justifyContent="flex-start">
          <Text useBorder={stopInner}>{substantive}</Text>
        </Word>
      </IdeaGenerator>
      <ExitButton onClick={handleClick}>Back</ExitButton>
    </>
  );
};
