import { Heading, HStack, Image, Text, VStack, Link, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" color="black" alignItems="flex-start" borderRadius={10} overflow={"hidden"}>
      <Image src={imageSrc} alt={title} height={300} borderRadius={10} />
      <Box mt={5} p ={5}>
        <Heading as='h5' size='sm' mb={5}>{title}</Heading>
        <Text fontSize='sm' mb={5}>{description}</Text>
        <Link href='https://chakra-ui.com' isExternal>
          See more  <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Link>
      </Box>
      
    </VStack>
  );
};

export default Card;
