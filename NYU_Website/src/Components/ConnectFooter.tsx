import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import instagram from "../assets/instagramLogo.png";
import twitter from "../assets/twitterLogo.png";
import facebook from "../assets/facebookLogo.png";
import linkedin from "../assets/linkedinLogo.png";
import youtube from "../assets/youtubeLogo.png";

const ConnectFooter = () => {
  return (
    <>
      <Box width="100%" h="250px" bg="#220337">
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
          m="auto"
          padding="5px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3, 1fr)"
          mt="20px"
        >
          <GridItem
            rowSpan={1}
            colSpan={1}
            h="176px"
            borderRight="1px"
            borderTop="1px"
            borderColor="#57068C"
            padding="10px"
          >
            <Text fontWeight="semibold" fontSize="20px" color="white" mt="15px">
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
            w="600px"
            borderTop="1px"
            borderColor="#57068C"
          >
            <Text
              fontWeight="semibold"
              fontSize="20px"
              color="white"
              mt="25px"
              ml="10px"
            >
              ON THIS SITE
            </Text>
            <SimpleGrid columns={3} spacingY="10px" ml="15px" mt="5px">
              <Link color="white" fontWeight="light">
                About NYU
              </Link>
              <Link color="white" fontWeight="light">
                Academics
              </Link>
              <Link color="white" fontWeight="light">
                Research
              </Link>
              <Link color="white" fontWeight="light">
                Admissions
              </Link>
              <Link color="white" fontWeight="light">
                University Life
              </Link>
            </SimpleGrid>
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={1}
            h="176px"
            borderLeft="1px"
            borderTop="1px"
            borderColor="#57068C"
          >
            <Text
              fontWeight="semibold"
              fontSize="20px"
              color="white"
              mt="25px"
              ml="15px"
            >
              MAIN CAMPUSES
            </Text>
            <VStack align="left" ml="15px" mt="10px">
              <Link color="white" fontWeight="light">
                New York
              </Link>
              <Link color="white" fontWeight="light">
                Abu Dhabi
              </Link>
              <Link color="white" fontWeight="light">
                Shanghai
              </Link>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default ConnectFooter;
