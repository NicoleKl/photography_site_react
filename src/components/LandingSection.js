import React from "react";
import { Avatar, Heading, VStack, Wrap} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Welcome to my photography website!";
const bio1 =
  "I specialize in subject photography and nature photography, capturing the beauty and essence of my subjects through my lens.";
const bio2 =
  "Please take a moment to browse through my portfolio and see the passion and dedication that I bring to every project.";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#50574e"
  >
    <VStack>
      <VStack mb="50">
        <Avatar size="2xl" name="Pete" src="photos/avatar3.webp" />
        <Heading as="h6" size="2xl" pb="10">
          {greeting}
        </Heading>
        <Heading textAlign="center" as="h2" size="lg">
          {bio1}
        </Heading>
      </VStack>

      <VStack>
        <Heading textAlign="center" as="h2" size="md">
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
