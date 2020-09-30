import React, { useState } from "react";
import styled from "styled-components";
import Home from "./components/Home";
import IdeaGenerator from "./components/IdeaGenerator";

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

export default () => {
  const [showGenerator, setShowGenerator] = useState(true);
  return (
    <Wrapper>
      {showGenerator && (
        <IdeaGenerator handleClick={() => setShowGenerator(false)} />
      )}
      {!showGenerator && <Home handleClick={() => setShowGenerator(true)} />}
    </Wrapper>
  );
};
