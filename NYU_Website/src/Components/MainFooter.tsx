import { Box, Center, HStack, Link, Text } from "@chakra-ui/react";

const MainFooter = () => {
  return (
    <Center w="100%" h="110px" bg="black" justifyContent="center">
      <HStack justifyContent="space-between" spacing="250px">
        <HStack>
          <Text fontWeight="semibold" fontSize="20px" color="white">
            New York University
          </Text>
          <Text
            fontWeight="semibold"
            fontSize="15px"
            color="white"
            paddingLeft="10px"
            paddingRight="10px"
          >
            |
          </Text>
          <Link color="white" mr="10px">
            Students
          </Link>
          <Link color="white" mr="10px">
            Faculty
          </Link>
          <Link color="white" mr="10px">
            Alumni
          </Link>
          <Link color="white" mr="10px">
            Employees
          </Link>
          <Link color="white" mr="10px">
            Community
          </Link>
        </HStack>
        <Box w="330px">
          <Text color="white" fontSize="smaller" fontFamily={"Georgia"}>
            Unless otherwise noted, all conetent copyright New York University.
            All rights reserved.
          </Text>
        </Box>
      </HStack>
    </Center>
  );
};

export default MainFooter;
