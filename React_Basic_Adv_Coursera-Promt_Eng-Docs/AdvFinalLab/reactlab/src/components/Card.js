import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return(
    <VStack
      spacing={0}
      borderRadius="xl"
      overflow="hidden"      
      bg="white" 
      color="black"
      align="start"
      width="100%"   
    >
      <Box width="100%" overflow="hidden" borderRadius="xl">
        <Image src={imageSrc} alt={title} objectFit="cover" width="100%"/>
      </Box>
      <Box p={4} width="100%">
        <Heading size="md" fontWeight="bold" >
          {title}
        </Heading> 
        <Text color="darkgray" my={4}>
          {description}
        </Text>
        <HStack spacing={2}>
          <Text fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </Box>
    </VStack>
  )
};
export default Card;
