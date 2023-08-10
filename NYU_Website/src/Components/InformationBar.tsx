import { Button, HStack, Icon, Text } from "@chakra-ui/react";
import { AiOutlineGlobal } from "react-icons/Ai";

const InformationBar = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      position="fixed"
      zIndex="200"
      w="100%"
    >
      <HStack>
        <Text paddingLeft="350px" paddingRight="10px" fontWeight="bold">
          Information For:
        </Text>
        <Button
          variant="ghost"
          borderRadius="0px"
          w="85px"
          h="50px"
          color="#57068c"
          _hover={{ background: "#57068C", color: "white" }}
          fontWeight="light"
        >
          Students
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          w="70px"
          h="50px"
          color="#57068c"
          _hover={{ background: "#57068C", color: "white" }}
          fontWeight="light"
        >
          Faculty
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          w="70px"
          h="50px"
          color="#57068c"
          _hover={{ background: "#57068C", color: "white" }}
          fontWeight="light"
        >
          Alumni
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          w="95px"
          h="50px"
          color="#57068c"
          _hover={{ background: "#57068C", color: "white" }}
          fontWeight="light"
        >
          Employees
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          w="105px"
          h="50px"
          color="#57068c"
          _hover={{ background: "#57068C", color: "white" }}
          fontWeight="light"
        >
          Community
        </Button>
      </HStack>
      <HStack marginRight="370px" bg="gray" spacing="0">
        <Button
          variant="ghost"
          borderRadius="0px"
          w="190px"
          h="50px"
          bg="#8900E1"
          color="white"
          _hover={{ bgColor: "#330662" }}
        >
          Login to NYU Home
        </Button>
        <HStack
          as="button"
          borderRadius="0px"
          width="130px"
          height="50px"
          bg="#220337"
          color="white"
          _hover={{ bg: "#330662" }}
          justifyContent="center"
        >
          <Icon as={AiOutlineGlobal} boxSize="25px"></Icon>
          <Text fontWeight="semibold">All NYU</Text>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default InformationBar;
