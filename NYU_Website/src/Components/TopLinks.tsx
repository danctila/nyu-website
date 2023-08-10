import { HStack, Link, SimpleGrid, Text } from "@chakra-ui/react";

const TopLinks = () => {
  return (
    <>
      <HStack marginTop="-20px" marginBottom="25px">
        <Text
          fontWeight="extrabold"
          fontSize="18"
          marginLeft="360px"
          marginRight="160px"
        >
          Top Links
        </Text>
        <SimpleGrid
          columns={4}
          spacingX="80px"
          spacingY="10px"
          marginTop="50px"
        >
          <Link _hover={{}} color="#57068c">
            Admissions
          </Link>
          <Link _hover={{}} color="#57068c">
            Financial Aid
          </Link>
          <Link _hover={{}} color="#57068c">
            Careers at NYU
          </Link>
          <Link _hover={{}} color="#57068c">
            Academic Programs
          </Link>
          <Link _hover={{}} color="#57068c">
            Albert
          </Link>
          <Link _hover={{}} color="#57068c">
            Housing
          </Link>
          <Link _hover={{}} color="#57068c">
            Visitors
          </Link>
          <Link _hover={{}} color="#57068c">
            Libraries
          </Link>
        </SimpleGrid>
      </HStack>
    </>
  );
};

export default TopLinks;
