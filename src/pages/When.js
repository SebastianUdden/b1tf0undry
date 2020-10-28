import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Page from "../components/Page";
import { colors } from "../constants/colors";
import { H2, P, Link, Constraint, Button, LI } from "./shared";

const Wrapper = styled.div`
  background-color: ${colors.alternateBackground};
  border: none;
  border-radius: 12px;
  padding: 1.2rem 2rem;
  margin-bottom: 2vh;
  text-align: center;
`;
const DateWrapper = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 10px;
`;
const DaysWrapper = styled.div`
  text-align: center;
`;
const DaysRemaining = styled(P)`
  margin: 0;
  color: orange;
  font-weight: 500;
  opacity: 0.8;
`;
const Day = styled.p`
  font-size: 55px;
  margin: 0;
`;
const Month = styled.p`
  margin: 0;
`;
const ShowUpcoming = styled(Button)`
  margin: 0 0 20px;
`;
const Upcoming = styled.ul`
  background-color: ${colors.alternateBackground};
  border: none;
  border-radius: 12px;
  padding: 1.2rem 2rem;
  margin: 0 0 10px;
  li {
    list-style-type: none;
    font-weight: 300;
    color: #999;
  }
`;
const Strong = styled.strong`
  color: orange;
  font-weight: 500;
  opacity: 0.8;
`;

const nthWeekdayOfMonth = (weekday, n, date) => {
  const idate = new Date(date.getFullYear(), date.getMonth(), 1);
  let count = 0;
  while (true) {
    if (idate.getDay() === weekday) {
      if (++count === n) {
        break;
      }
    }
    idate.setDate(idate.getDate() + 1);
  }
  return idate;
};

const dayFormat = (day) => {
  let dayType = day;
  if (day > 30) {
    dayType -= 30;
  } else if (day > 20) {
    dayType -= 20;
  } else if (day > 10) {
    dayType -= 10;
  }
  if (dayType === 1) {
    return `${day}st`;
  }
  if (dayType === 2) {
    return `${day}nd`;
  }
  if (dayType === 3) {
    return `${day}rd`;
  }
  return `${day}th`;
};

const monthFormat = (index) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[index];
};

const getDaysRemaining = (date) => {
  const diff = date - new Date();
  const seconds = diff / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  return Math.floor(hours / 24);
};

const getNextHackathon = (months = 1) => {
  const current = new Date();
  let theDate = nthWeekdayOfMonth(0, 1, new Date());
  if (theDate < current) {
    current.setMonth(theDate.getMonth() + months);
    theDate = nthWeekdayOfMonth(0, 1, current);
  }
  const month = monthFormat(theDate.getMonth());
  const day = theDate.getDate();
  const daysRemaining = getDaysRemaining(theDate);

  return { month, day, daysRemaining };
};

const getUpcoming = () => {
  const monthsIndex = [...new Array(11).keys()];
  return monthsIndex.map((index) => {
    const { month, day } = getNextHackathon(index + 2);
    return (
      <LI>
        Sunday,{" "}
        <Strong>
          {month} {dayFormat(day)}
        </Strong>
      </LI>
    );
  });
};

export default ({ changeTab }) => {
  const [showUpcoming, setShowUpcoming] = useState(true);
  const { month, day, daysRemaining } = getNextHackathon();

  const mail = "mailto:sebastian.udden@gmail.com";
  const subject = `?subject=b1tf0undry hackathon - ${month} ${dayFormat(day)}`;
  const body = `&body=Hi,%0d%0aI'm super excited to join the next b1tf0undry hackathon on ${month} ${dayFormat(
    day
  )} and would be a great addition to the group since I ______.%0d%0a%0d%0aAt what time and what place is it happening?%0d%0a%0d%0aRegards,%0d%0a___ ___`;
  const message = `${mail}${subject}${body}`;

  return (
    <Page changeTab={changeTab}>
      <Constraint>
        <H2>So you want join us?</H2>
        <P>
          Awesome, though we are a small group by design we are always on the
          lookout for potential new members. Sign up and let us know why you'd
          make a great b1tf0under!
        </P>
        <Wrapper>
          <H2>Next Hackathon</H2>
          <DateWrapper>
            <Month>{month}</Month>
            <Day>{day}</Day>
          </DateWrapper>
          <DaysWrapper>
            <DaysRemaining>{daysRemaining} days remaining</DaysRemaining>
          </DaysWrapper>
        </Wrapper>
        <ShowUpcoming onClick={() => setShowUpcoming(!showUpcoming)}>
          {showUpcoming ? "Hide" : "Show"} upcoming
        </ShowUpcoming>
        {showUpcoming && <Upcoming>{getUpcoming()}</Upcoming>}
        <Link href={message} target="_blank">
          Sign up here
        </Link>
      </Constraint>
    </Page>
  );
};
