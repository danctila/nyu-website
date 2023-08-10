import { Grid, GridItem } from "@chakra-ui/react";
import TopLinks from "./TopLinks";

const MainGrid = () => {
  return (
    <>
      <Grid
        h="1000px"
        w="1200px"
        margin="auto"
        padding="5px"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
        paddingTop={"173px"}
      >
        <GridItem rowSpan={2} colSpan={2} bg="tomato" />
        <GridItem rowSpan={1} colSpan={1} bg="tomato" />
        <GridItem rowSpan={1} colSpan={1} bg="tomato" />
        <GridItem rowSpan={1} colSpan={1} bg="tomato" />
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem rowSpan={1} colSpan={1} bg="tomato" />
        <GridItem rowSpan={1} colSpan={1} bg="tomato" />
        <GridItem rowSpan={1} colSpan={1} bg="tomato" />
        <GridItem rowSpan={2} colSpan={2} bg="tomato" />
        <GridItem rowSpan={1} colSpan={1} bg="tomato" />
        <GridItem rowSpan={1} colSpan={1} bg="tomato" />
        <GridItem rowSpan={1} colSpan={1} bg="tomato" />
      </Grid>
      <TopLinks />
    </>
  );
};

export default MainGrid;
