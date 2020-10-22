import React, { useState } from "react";
import styled from "styled-components";
import Why from "./pages/Why";
import How from "./pages/How";
import What from "./pages/What";
import IdeaGenerator from "./pages/IdeaGenerator";
import When from "./pages/When";
import Navigation from "./components/Navigation";
import { colors } from "./constants/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.background};
  font-size: calc(16px + 1vmin);
  color: white;
  min-height: 100vh;
`;

export default () => {
  const [tab, setTab] = useState("idea-generator");
  return (
    <Wrapper>
      {tab === "idea-generator" && (
        <IdeaGenerator changeTab={(t) => setTab(t)} />
      )}
      {tab === "what" && <What changeTab={(t) => setTab(t)} />}
      {tab === "why" && <Why changeTab={(t) => setTab(t)} />}
      {tab === "when" && <When changeTab={(t) => setTab(t)} />}
      {tab === "how" && <How changeTab={(t) => setTab(t)} />}
      <Navigation onChange={(t) => setTab(t)} selected={tab} />
    </Wrapper>
  );
};
