import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";
import { Button, LI as LIUI, P, UL as ULUI, OL } from "../pages/shared";

const Agenda = styled.div`
  background-color: ${colors.alternateBackground};
  border-radius: 6px;
  padding: 1rem 3rem;
  :hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  margin-bottom: 30px;
`;
const Description = styled(P)`
  text-align: left;
  margin: 5px 0;
  font-weight: 300;
`;
const UL = styled(ULUI)`
  margin: 0 0 0 28px;
  padding: 0;
  align-items: flex-start;
`;
const LI = styled(LIUI)`
  margin: 5px 0;
  ${(p) =>
    p.main &&
    `
    margin-top: 10px;
    font-weight: 700;
  `}
`;
const EmojiList = styled(OL)`
  margin-top: 5px;
  padding: 0;
`;
const EmojiLI = styled(LI)`
  list-style-type: none;
  margin: 5px 0;
  display: flex;
`;
const Emoji = styled.div`
  margin-right: 5px;
`;
const ButtonMargin = styled(Button)`
  margin-bottom: 30px;
`;

export default ({ changeTab }) => {
  const [showAgenda, setShowAgenda] = useState(false);
  return (
    <>
      <ButtonMargin onClick={() => setShowAgenda(!showAgenda)}>
        {showAgenda ? "Hide" : "Show"} details
      </ButtonMargin>
      {showAgenda && (
        <Agenda>
          <OL>
            <LI main>Meet &amp; greet</LI>
            <LI main>
              Lean coffee
              <Description>
                A structured meeting without an agenda, the principle is that
                all participants can bring talking points by writing them on
                post-ITs, then a subject is voted on (
                <span role="img" aria-label="Plus">
                  &#10133;
                </span>
                ) to start the first 5 minutes. After that the participants vote
                on either continuing on the subject (
                <span role="img" aria-label="Thumb up">
                  &#128077;
                </span>
                ), picking a new subject (
                <span role="img" aria-label="Fist">
                  &#128074;
                </span>
                ) or ending the round of lean coffee (
                <span role="img" aria-label="Thumb down">
                  &#128078;
                </span>
                ).
              </Description>
            </LI>
            <LI main>
              Brain-workout and new ideas
              <UL>
                <LI>What concept would we like to know more about?</LI>
                <LI>
                  Is there a particular idea that someone has for a hackathon?
                </LI>
                <LI>
                  If not, use the{" "}
                  <Button onClick={() => changeTab("idea-generator")}>
                    idea cogs
                  </Button>
                </LI>
                <LI>How can we scale it down to the size of one hackathon?</LI>
              </UL>
            </LI>
            <LI main>
              Hackathon
              <Description>
                Free format based on what the participants feel like trying for
                the day.
              </Description>
            </LI>
            <LI main>
              Publish result to b1tf0undry.com
              <Description>
                This is an important part of the process and brings home the
                point, b1tf0undry is not about making something huge and
                sprawling, but rather small and usable. The result of the
                hackathon is considered ready for release no matter what. Check
                the previous results{" "}
                <Button onClick={() => changeTab("wow")}>here.</Button>
              </Description>
            </LI>
            <LI main>
              Wrap-up, retrospective and key learnings
              <EmojiList>
                <EmojiLI>
                  <Emoji>
                    <span role="img" aria-label="Plus">
                      &#10133;
                    </span>
                  </Emoji>
                  What went good?
                </EmojiLI>
                <EmojiLI>
                  <Emoji>
                    <span role="img" aria-label="Upward curve">
                      &#9935;
                    </span>
                  </Emoji>
                  What can be improved?
                </EmojiLI>
                <EmojiLI>
                  <Emoji>
                    <span role="img" aria-label="Lightbulb">
                      &#128161;
                    </span>
                  </Emoji>
                  Was there a special technique, snippet or method that was
                  especially interesting or helpful?
                </EmojiLI>
                <EmojiLI>
                  <Emoji>
                    <span role="img" aria-label="Scholar hat">
                      &#127891;
                    </span>
                  </Emoji>
                  Can we turn it into a gist?
                </EmojiLI>
              </EmojiList>
            </LI>
          </OL>
        </Agenda>
      )}
    </>
  );
};
