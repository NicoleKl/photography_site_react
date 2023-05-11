import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: nicole.klosovich@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/NicoleKl",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/veronika-klosovych-382200172/",
  },
];

const SocialLinks = (props) => {
  return (<HStack
          px={5}
          spacing={10}
          justifyContent="space-between"
          alignItems="center">
          {props.socialMedia.map((social) => {
            return (
              <Link
                key={social.url}
                href={social.url}
                style={{ display: "block" }}
                isExternal
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </Link>
            );
          })}
        </HStack>)
}

const MenuLinks = (props) => {
  const menu = [{
    name: "Gallery",
    sectionId: "gallery"
  },
    {
    name: "Contact me",
    sectionId: "contactme"
    }]
  
  return (<HStack spacing={10} justifyContent="space-between"
    alignItems="center">
    {menu.map((menuLink) => {
      return (
        <Link
          key={menuLink.sectionId}
          href={"#" + menuLink.sectionId}
          onClick={props.clickHandler(menuLink.sectionId)}
          display={{ base: "block" }}
          fontWeight="bold"
        >
          {menuLink.name}
        </Link>
      );
    })}
  </HStack>)
}

const Header = () => {
  const [positionY, setPosition] = useState(window.pageYOffset);
  const [transY, setTranslate] = useState(0);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const newPosition = window.pageYOffset;

      if (newPosition > positionY) {
        setTranslate(-200)
      } else {
        setTranslate(0)
      }
      setPosition(newPosition);
    }

    window.addEventListener('scroll', handleScroll);
    
    return (() => {
           window.removeEventListener("scroll", handleScroll);
        })
  })

  return (
    <Box
      position="fixed"
      top={transY}
      left={0}
      right={0}
      transitionProperty="top"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#414542"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <SocialLinks socialMedia={socials} />
          </nav>
          <nav>
            <MenuLinks clickHandler={handleClick} />
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
