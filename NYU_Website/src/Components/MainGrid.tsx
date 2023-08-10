import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import TopLinks from "./TopLinks";
import DylanCreates from "../assets/newyork.jpg";
import stagePicture from "../assets/stagePic2.png";

const MainGrid = () => {
  return (
    <>
      <Grid
        h="1130px"
        w="1202px"
        m="auto"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
        paddingTop={"173px"}
      >
        <GridItem rowSpan={2} colSpan={2} as="button">
          <Image src={DylanCreates} boxSize="100%" />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          as="button"
          color="white"
          bg="#57068C"
          _hover={{ background: "white", color: "#57068C" }}
        >
          <Text
            w="200px"
            m="auto"
            mt="-100px"
            fontWeight="bold"
            lineHeight="35px"
          >
            Explore Summer Programs
          </Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} as="button" bg="#220337">
          <Text
            w="200px"
            m="auto"
            mt="-100px"
            fontWeight="light"
            fontSize="15px"
            lineHeight="30px"
            color="white"
            fontFamily="Georgia"
          >
            NYU Student Dylan Anctil Fights Cancer with Newly Developed Cure
          </Text>
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          as="button"
          color="white"
          bg="#57068C"
          _hover={{ background: "white", color: "#57068C" }}
        >
          <Text
            w="200px"
            m="auto"
            mt="-100px"
            fontWeight="bold"
            lineHeight="35px"
          >
            Academic Programs
          </Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} as="button" bg="#220337">
          <Text
            w="200px"
            m="auto"
            mt="-100px"
            fontWeight="light"
            fontSize="15px"
            lineHeight="30px"
            color="white"
            fontFamily="Georgia"
          >
            New York Machine Learning Club adopts Dylan Anctil as its New
            President
          </Text>
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          as="button"
          color="white"
          bg="#57068C"
          _hover={{ background: "white", color: "#57068C" }}
        >
          <Text
            w="200px"
            m="auto"
            mt="-100px"
            fontWeight="bold"
            lineHeight="35px"
          >
            Graduate Admissions
          </Text>
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          as="button"
          color="white"
          bg="#8900e1"
          _hover={{ background: "white", color: "#8900e1" }}
        >
          <Text
            w="200px"
            m="auto"
            mt="-100px"
            fontWeight="bold"
            lineHeight="25px"
          >
            Follow on Instagram
          </Text>
          <Text w="200px" m="auto" mt="15px" fontWeight="light">
            @danctila
          </Text>
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          as="button"
          color="white"
          bg="#57068C"
          _hover={{ background: "white", color: "#57068C" }}
        >
          <Text
            w="200px"
            m="auto"
            mt="-100px"
            fontWeight="bold"
            lineHeight="35px"
          >
            Financial Aid and Scholarships
          </Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} as="button" bg="#220337">
          <Text
            w="200px"
            m="auto"
            mt="-100px"
            fontWeight="light"
            fontSize="15px"
            lineHeight="30px"
            color="white"
            fontFamily="Georgia"
          >
            Alumni at Work: Apple's Head Software Engineer Dylan Anctil
          </Text>
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          as="button"
          color="white"
          bg="#8900e1"
          _hover={{ background: "white", color: "#8900e1" }}
        >
          <Text w="200px" m="auto" fontWeight="normal" fontSize="14px">
            When it was time for Dylan Anctil (NYU 2027) to graduate with his
            master's in Computer Science-and to bid farewell to the club of...
          </Text>
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} as="button">
          <Image src={stagePicture} boxSize="100%" />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          as="button"
          color="white"
          bg="#8900e1"
          _hover={{ background: "white", color: "#8900e1" }}
        >
          <Text w="200px" m="auto" fontWeight="normal" fontSize="14px">
            As a grad student at NYU, Dylan Anctil cherished his locker at
            bobst. When he graduated, it took three suitcase...
          </Text>
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          as="button"
          color="white"
          bg="#57068C"
          _hover={{ background: "white", color: "#57068C" }}
        >
          <Text
            w="200px"
            m="auto"
            mt="-100px"
            fontWeight="bold"
            lineHeight="35px"
          >
            Career Development
          </Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} as="button" bg="#220337">
          <Text
            w="200px"
            m="auto"
            mt="-100px"
            fontWeight="light"
            fontSize="15px"
            lineHeight="30px"
            color="white"
            fontFamily="Georgia"
          >
            Racial Discrimination Increases Risk for Chilhood Obesity
          </Text>
        </GridItem>
      </Grid>
      <TopLinks />
    </>
  );
};

export default MainGrid;
