import { Box, HStack, Link } from "@chakra-ui/react";

const ConnectFooter = () => {
  return (
    <>
      <Box width="100%" height="250px" bgColor="#220337">
        <HStack spacing="70px" paddingTop="25px" justify="center">
          <Link color="white">Search</Link>
          <Link color="white">Campus Map</Link>
          <Link color="white">Events</Link>
          <Link color="white">Contact Us</Link>
          <Link color="white">Give</Link>
          <Link color="white">Copyright & Fair Use</Link>
          <Link color="white">Accessibility</Link>
          <Link color="white">Feedback</Link>
        </HStack>
      </Box>
    </>
  );
};

export default ConnectFooter;
