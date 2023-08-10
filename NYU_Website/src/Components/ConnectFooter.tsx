import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import instagram from "../assets/instagramLogo.png";
import twitter from "../assets/twitterLogo.png";
import facebook from "../assets/facebookLogo.png";
import linkedin from "../assets/linkedinLogo.png";
import youtube from "../assets/youtubeLogo.png";

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
        <Grid
          h="200px"
          w="1200px"
          margin="auto"
          padding="5px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3, 1fr)"
        >
          <GridItem
            rowSpan={1}
            colSpan={1}
            bg="tomato"
            borderRight="1px"
            borderTop="1px"
            borderColor="white"
          >
            <Text
              fontWeight="semibold"
              fontSize="20px"
              color="white"
              marginTop="20px"
            >
              CONNECT WITH NYU
            </Text>
            <HStack spacing="20px" paddingTop="10px">
              <Image src={instagram} alt="instagram" boxSize="20px" />
              <Image src={twitter} alt="twitter" boxSize="20px" />
              <Image src={facebook} alt="facebook" boxSize="20px" />
              <Image src={linkedin} alt="linkedin" boxSize="20px" />
              <Image src={youtube} alt="youtube" height="18px" width="25px" />
            </HStack>
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={1}
            bg="tomato"
            width="600px"
            borderTop="1px"
            borderColor="white"
          />
          <GridItem
            rowSpan={1}
            colSpan={1}
            bg="tomato"
            borderLeft="1px"
            borderTop="1px"
            borderColor="white"
          />
        </Grid>
      </Box>
    </>
  );
};

export default ConnectFooter;
