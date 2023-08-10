import { HStack, Button, Image, Input, Center } from "@chakra-ui/react";
import NYULogo from "../assets/NYU-Emblem.png";
import searchIcon1 from "../assets/searchicon.png";

const NYUHeader = () => {
  return (
    <HStack
      bg="#57068C"
      h="115"
      w="100%"
      position="fixed"
      zIndex="199"
      mt="48px"
    >
      <Image src={NYULogo} h="72x" w="140px" ml="360px" />
      <HStack spacing="0" bg="#57068C">
        <Button
          variant="ghost"
          borderRadius="0px"
          w="150px"
          h="115px"
          color="white"
          bg="#57068C"
          _hover={{ background: "#330662", color: "white" }}
          fontWeight="normal"
        >
          About NYU
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          w="150px"
          h="115px"
          color="white"
          bg="#57068C"
          _hover={{ background: "#330662", color: "white" }}
          fontWeight="normal"
        >
          Admissions
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          w="150px"
          h="115px"
          color="white"
          bg="#57068C"
          _hover={{ background: "#330662", color: "white" }}
          fontWeight="normal"
        >
          Academics
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          w="180px"
          h="115px"
          color="white"
          bg="#57068C"
          _hover={{ background: "#330662", color: "white" }}
          fontWeight="normal"
        >
          University Life
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          w="150px"
          h="115px"
          color="white"
          bg="#57068C"
          _hover={{ background: "#330662", color: "white" }}
          fontWeight="normal"
        >
          Research
        </Button>
      </HStack>
      <HStack spacing="0">
        <Input
          background="white"
          placeholder="Search"
          borderRadius="0"
          w="230px"
        ></Input>
        <Center
          boxSize="40px"
          background="#220337"
          _hover={{ background: "#330662" }}
          as="button"
        >
          <Image src={searchIcon1} boxSize="19px" objectFit="cover" />
        </Center>
      </HStack>
    </HStack>
  );
};

export default NYUHeader;
