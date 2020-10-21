import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Page from "../components/Page";
import { H2, P, CTA, Button } from "./shared";

const Contact = styled.div`
  max-width: 537px;
  opacity: ${(p) => (!p.visible ? 0 : 1)};
  transition: opacity 300ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`;

export default ({ changeTab }) => {
  const [hideText, setHideText] = useState(false);

  const onCogClick = (e) => {
    e.stopPropagation();
    setHideText(true);
    setTimeout(() => {
      changeTab("idea-generator");
    }, 300);
  };
  return (
    <Page>
      <Contact visible={!hideText}>
        <Header onCogClick={onCogClick} changeTab={(t) => changeTab(t)} />

        <H2>The setup</H2>
        <P>
          On the first sunday of each month, we decide as a group on a timespan
          and location to meet up. After some initial meet and greet, we
          brainstorm an idea for the hackathon and make sure it has a decent
          scope. If none should arise organically we can always turn to the{" "}
          <Button onClick={onCogClick}>idea cogs</Button> for inspiration.
        </P>
        <P>
          Then we start the hackathon, creating the project within the
          predecided time-frame. The result, whether a success or failure, is
          published, linked through this site and accredited to the people who
          joined the hackathon.
        </P>
        <P>
          We end with a small retro on what worked and what could be improved
          before closing for the day.
        </P>
        <CTA onClick={() => changeTab("when")}>
          Sounds amazing, when can I join?
        </CTA>
      </Contact>
    </Page>
  );
};
