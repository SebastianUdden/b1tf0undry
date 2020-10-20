import React, { useState } from "react";
import styled from "styled-components";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import IdeaGenerator from "./components/IdeaGenerator";
import NextHackathon from "./components/NextHackathon";

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
  max-height: 100vh;
`;

export default () => {
  const [tab, setTab] = useState("home");
  return (
    <Wrapper>
      {tab === "idea-generator" && (
        <IdeaGenerator handleClick={() => setTab("home")} />
      )}
      {tab === "home" && <Home changeTab={(tab) => setTab(tab)} />}
      {tab === "about" && <About changeTab={(tab) => setTab(tab)} />}
      {tab === "contact" && <Contact changeTab={(tab) => setTab(tab)} />}
      {tab === "next-hackathon" && (
        <NextHackathon changeTab={(tab) => setTab(tab)} />
      )}
    </Wrapper>
  );
};
