import React, { useState } from "react";
import styled from "styled-components";
import Cog from "./Cog";
import { H1, H2 as H2UI, P, Button, Link, Constraint, Footer } from "./shared";

const NextHackathon = styled.div`
  max-width: 537px;
  opacity: ${(p) => (!p.visible ? 0 : 1)};
  transition: opacity 300ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`;
const Wrapper = styled.div`
  background-color: #222;
  border: none;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1rem;
`;
const H2 = styled(H2UI)`
  margin: 0 0 0.5rem;
`;
const DateWrapper = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 6px;
`;
const DaysWrapper = styled.div`
  text-align: center;
`;
const DaysRemaining = styled(P)`
  margin: 0;
`;
const Day = styled.p`
  font-size: 55px;
  margin: 0;
`;
const Month = styled.p`
  margin: 0;
`;

const nthWeekdayOfMonth = (weekday, n, date) => {
  const idate = new Date(date.getFullYear(), date.getMonth(), 1);
  let count = 0;
  while (true) {
    if (idate.getDay() === weekday) {
      if (++count == n) {
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
  return Math.ceil(hours / 24);
};

const getNextHackathon = () => {
  const current = new Date();
  let theDate = nthWeekdayOfMonth(0, 1, new Date());
  if (theDate < current) {
    current.setMonth(theDate.getMonth() + 1);
    theDate = nthWeekdayOfMonth(0, 1, current);
  }
  const month = monthFormat(theDate.getMonth());
  const day = theDate.getDate();
  const daysRemaining = getDaysRemaining(theDate);

  return { month, day, daysRemaining };
};

export default ({ changeTab }) => {
  const [hideText, setHideText] = useState(false);
  const { month, day, daysRemaining } = getNextHackathon();

  const onCogClick = (e) => {
    e.stopPropagation();
    setHideText(true);
    setTimeout(() => {
      changeTab("idea-generator");
    }, 300);
  };
  const mail = "mailto:sebastian.udden@gmail.com";
  const subject = `?subject=b1tf0undry hackathon - ${month} ${dayFormat(day)}`;
  const body = `&body=Hi,%0d%0aI'm super excited to join the next b1tf0undry hackathon on ${month} ${dayFormat(
    day
  )} and would be a great addition to the group since I ______.%0d%0a%0d%0aAt what time and what place is it happening?%0d%0a%0d%0aRegards,%0d%0a___ ___`;
  const message = `${mail}${subject}${body}`;

  return (
    <Constraint>
      <NextHackathon visible={!hideText}>
        <H1 onClick={() => changeTab("home")}>
          b1tf
          <Cog
            color="white"
            size="calc(21px + 2vmin)"
            margin="0 0 -0.23rem 0"
            onClick={onCogClick}
          />
          undry
        </H1>
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
        <Link href={message} target="_blank">
          Sign up here
        </Link>
        <Footer>
          <Button onClick={() => changeTab("home")}>Back</Button>
        </Footer>
      </NextHackathon>
    </Constraint>
  );
};
