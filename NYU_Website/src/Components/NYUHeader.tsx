import { HStack, Button, Image, Input, Box, Center } from "@chakra-ui/react";
import NYULogo from "../assets/NYU-Emblem.png";
import searchIcon1 from "../assets/searchicon1.png";

const NYUHeader = () => {
  return (
    <HStack bg="#57068C" height="115" width="fit">
      <Image src={NYULogo} height="72x" width="140px" marginLeft="360px" />
      <HStack spacing="0" backgroundColor="#57068C">
        <Button
          variant="ghost"
          borderRadius="0px"
          width="150px"
          height="115px"
          color="white"
          backgroundColor="#57068C"
          _hover={{ background: "#330662", color: "white" }}
          fontWeight="normal"
        >
          About NYU
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          width="150px"
          height="115px"
          color="white"
          backgroundColor="#57068C"
          _hover={{ background: "#330662", color: "white" }}
          fontWeight="normal"
        >
          Admissions
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          width="150px"
          height="115px"
          color="white"
          backgroundColor="#57068C"
          _hover={{ background: "#330662", color: "white" }}
          fontWeight="normal"
        >
          Academics
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          width="180px"
          height="115px"
          color="white"
          backgroundColor="#57068C"
          _hover={{ background: "#330662", color: "white" }}
          fontWeight="normal"
        >
          University Life
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          width="150px"
          height="115px"
          color="white"
          backgroundColor="#57068C"
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
          width="230px"
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
