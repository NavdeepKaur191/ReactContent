import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const headerRef = useRef(null);
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

  //Side effect to handle window scroll
  useEffect(() => { 
    let prevPosition = window.scrollY;   
    const handleScroll = () => { 
      const currentPosition = window.scrollY; 
      const headerElement = headerRef.current; 
      if (!headerElement) { 
        return; 
      } 
      if (prevPosition > currentPosition) { 
        headerElement.style.transform = "translateY(0px)"; 
      } else { 
        headerElement.style.transform = "translateY(-200px)"; 
      } 
      prevPosition = currentPosition; 
    } 
    window.addEventListener('scroll', handleScroll) 
  
    return () => { 
      window.removeEventListener('scroll', handleScroll) 
    } 
  }, []); 
//Created NavBar Social links
  const socialLinks= socials.map((link,index)=>(<Box key={index}>
    <a href={link.url}><FontAwesomeIcon icon={link.icon} size="2x" /></a> 
    </Box>));
  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      zIndex={1000}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {socialLinks}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <Box>
              <a href="/#projects" onClick={handleClick('projects')}>Projects</a>
              </Box>
              <Box>
              <a href="/#contactme" onClick={handleClick('contactme')}> Contact Me</a>
              </Box>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
