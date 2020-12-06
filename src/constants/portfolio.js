import { B1TF0UNDERS } from "./b1tf0unders";
import galacticClock from "../assets/projects/galactic-clock.png";
import namnsdag from "../assets/projects/namnsdag.png";
const { alexander, sebastian } = B1TF0UNDERS;

export const PORTFOLIO = [
  {
    title: "Galactic Clock",
    description: "It's both TIME and SPACE!",
    href: "https://www.galactic-clock.com/",
    img: galacticClock,
    authors: [alexander, sebastian],
  },
  {
    title: "Dagens namnsdag",
    description: "Shows the name of the day.",
    href: "https://www.dagens-namnsdag.se/",
    img: namnsdag,
    authors: [alexander, sebastian],
  },
];
