import { Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack alignItems="flex-start" color="black" bg="white" borderRadius="3%">
      <HStack>
        <Image src={imageSrc} alt={description} borderRadius="3%" />
      </HStack>
      <VStack alignItems="flex-start" padding="1em">
        <Heading as="h3" size="md">{title}</Heading>
        <Text color="grey">{description}</Text>
        <HStack>
          <Text size="sm">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
