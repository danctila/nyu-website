import { Button, HStack, Text } from "@chakra-ui/react";

const InformationBar = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      position="fixed"
      zIndex="200"
      width="100%"
    >
      <HStack>
        <Text paddingLeft="350px" paddingRight="10px" fontWeight="bold">
          Information For:
        </Text>
        <Button
          variant="ghost"
          borderRadius="0px"
          width="85px"
          height="50px"
          color="#57068c"
          _hover={{ background: "#57068C", color: "white" }}
          fontWeight="light"
        >
          Students
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          width="70px"
          height="50px"
          color="#57068c"
          _hover={{ background: "#57068C", color: "white" }}
          fontWeight="light"
        >
          Faculty
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          width="70px"
          height="50px"
          color="#57068c"
          _hover={{ background: "#57068C", color: "white" }}
          fontWeight="light"
        >
          Alumni
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          width="95px"
          height="50px"
          color="#57068c"
          _hover={{ background: "#57068C", color: "white" }}
          fontWeight="light"
        >
          Employees
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          width="105px"
          height="50px"
          color="#57068c"
          _hover={{ background: "#57068C", color: "white" }}
          fontWeight="light"
        >
          Community
        </Button>
      </HStack>
      <HStack marginRight="370px" bgColor="gray" spacing="0">
        <Button
          variant="ghost"
          borderRadius="0px"
          width="190px"
          height="50px"
          bgColor="#8900E1"
          color="white"
          _hover={{ bgColor: "#330662" }}
        >
          Login to NYU Home
        </Button>
        <Button
          variant="ghost"
          borderRadius="0px"
          width="80px"
          height="50px"
          bgColor="#220337"
          color="white"
          _hover={{ bgColor: "#330662" }}
        >
          All NYU
        </Button>
      </HStack>
    </HStack>
  );
};

export default InformationBar;
