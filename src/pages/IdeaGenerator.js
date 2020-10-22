import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ADJECTIVES, SUBSTANTIVES } from "../constants/ideas";
import Cog from "../components/Cog";
import Page from "../components/Page";

const Absolute = styled.div`
  position: absolute;
  top: 90px;
  bottom: 0;
  left: 5vw;
  right: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -150px;
`;

const IdeaGenerator = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr 30%;
  width: 100vw;
`;
const CogOverlay = styled.div`
  display: grid;
`;
const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  opacity: ${(p) => (p.visible ? 1 : 0)};
  transition: opacity 3000ms ease-in-out;
`;
const Word = styled.div`
  display: flex;
  justify-content: ${(p) => p.justifyContent || "center"};
  align-items: center;
  max-width: 100%;
`;
const Text = styled.span`
  padding-bottom: 0.3rem;
  border-bottom: ${(p) => (p.useBorder ? "2px solid #b82ad2" : "none")};
  overflow-wrap: break-word;
  max-width: 100%;
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

export default ({ changeTab }) => {
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
      setCount(count + 3);
    }, 200);
  }, [count, stopInner, stopOuter]);

  const showOuterCog = count > 40;
  const size = count;
  return (
    <Page changeTab={() => changeTab("what")}>
      <Absolute>
        <Column>
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
                      size={`${size / 2}vw`}
                      zIndex={1}
                    />
                  </CogWrapper>
                  <CogWrapper>
                    <Cog
                      toRotation="360deg"
                      speed={18000}
                      color="#eee"
                      size={`${size}vw`}
                    />
                  </CogWrapper>
                </>
              )}
              {showOuterCog && (
                <>
                  <CogWrapper>
                    <Cog
                      color="#151515"
                      size="20vw"
                      toRotation={`-${stopInner ? 0 : 360}deg`}
                      zIndex={1}
                      speed={3000}
                      onClick={(e) => handleStop(e, "inner")}
                    />
                  </CogWrapper>
                  <CogWrapper>
                    <Cog
                      color="white"
                      size="40vw"
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
        </Column>
      </Absolute>
    </Page>
  );
};
