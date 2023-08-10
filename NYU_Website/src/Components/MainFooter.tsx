import { Box, Center, HStack, Link, Text } from "@chakra-ui/react";

const MainFooter = () => {
  return (
    <Center width="100%" height="110px" bgColor="black" justifyContent="center">
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
          <Link color="white" marginRight="10px">
            Students
          </Link>
          <Link color="white" marginRight="10px">
            Faculty
          </Link>
          <Link color="white" marginRight="10px">
            Alumni
          </Link>
          <Link color="white" marginRight="10px">
            Employees
          </Link>
          <Link color="white" marginRight="10px">
            Community
          </Link>
        </HStack>
        <Box width="330px">
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
