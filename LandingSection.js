import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const name = "Pete"
const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const avatarURL = "https://i.pravatar.cc/150?img=7"

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar name={name} src={avatarURL} size="2xl"/>
    <Heading size="sm">{greeting}</Heading>
    <Heading size="lg">{bio1}</Heading>
    <Heading size="lg">{bio2}</Heading>
  </FullScreenSection>
);

export default LandingSection;
