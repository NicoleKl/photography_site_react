import React, { useState, useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Button, Heading } from "@chakra-ui/react";
import Gallery from "react-photo-gallery";
import photos from "../data/photos";


const ProjectsSection = () => {
  const [photosToShow, setphotosToShow] = useState([]);
  const [count, setCount] = useState(2);
  const groupsNumber = photos.length;

  const addPhotoGroup = (count) => {
    let prevPhotos = photosToShow;
    prevPhotos.push(photos[count]);
    setphotosToShow(prevPhotos);
  }

  useEffect(() => {
    setphotosToShow([photos[0], photos[1]]);
  }, []);

  const handleShowMorePosts = () => {
    setCount((prevCount) => prevCount + 1);
    addPhotoGroup(count);
  };

  return (
    <FullScreenSection
      backgroundColor="#78846f"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      id="gallery"
    >
      <Heading as="h1" id="allery-section">
        Photo Gallery
      </Heading>
      <Box w="1280px" textAlign="center">
        {photosToShow.map((photoGroup, n) => {
          return <Gallery key={n} photos={photoGroup} />;
        })}
        <Button
          onClick={handleShowMorePosts}
          colorScheme="blackAlpha"
          size="lg"
          mt="50"
          isDisabled={count >= groupsNumber}
        >
          Load more
        </Button>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
