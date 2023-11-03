import { Heading, HStack, Image, Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack color='black' spacing='3' bg="white" align="flex-start" borderRadius='xl'>      
        <Image
      src={imageSrc}  
      alt={title}
      borderRadius='xl'   
    /> 
    <Box px='6'>   
      <Heading my='4' size='sm'>{title}</Heading>
      <Text fontSize='sm' color='gray.500'>
        {description}
      </Text>
      <HStack>
        <Text fontSize='sm'> See more</Text>
        <a href="#"><FontAwesomeIcon icon={faArrowRight} size="1x" /></a> 
      </HStack>
    </Box>     
    </VStack>    
  );
};

export default Card;
