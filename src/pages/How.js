import React from "react";
import Page from "../components/Page";
import { H2, P, CTA, Button, Constraint } from "./shared";

export default ({ changeTab }) => (
  <Page changeTab={changeTab}>
    <Constraint>
      <H2>The setup</H2>
      <P>
        On the first sunday of each month, we decide as a group on a timespan
        and location to meet up. After some initial meet and greet, we
        brainstorm an idea for the hackathon and make sure it has a decent
        scope. If none should arise organically we can always turn to the{" "}
        <Button onClick={() => changeTab("idea-generator")}>idea cogs</Button>{" "}
        for inspiration.
      </P>
      <P>
        Then we start the hackathon, creating the project within the predecided
        time-frame. The result, whether a success or failure, is published,
        linked through this site and accredited to the people who joined the
        hackathon.
      </P>
      <P>
        We end with a small retro on what worked and what could be improved
        before closing for the day.
      </P>
      <CTA onClick={() => changeTab("when")}>
        Sounds amazing, when can I join?
      </CTA>
    </Constraint>
  </Page>
);
