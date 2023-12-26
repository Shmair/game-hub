import { Box, Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => (
  <Grid
    templateAreas={{
      base: `"main"`, //on mobile we want only these area
      lg: `"aside main"`, // large devices > 1024px
    }}
    templateColumns={{
      base: "1fr", // fr for fruction (small device) the columns streaches out and takes all the available space
      lg: "200px", //large device 2 columns the first takes 200px the second all the rest of the available space
    }}
  >
    <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenreList />
      </GridItem>
    </Show>
    <GridItem area="main">
      <Box paddingLeft={2}>
        <Heading />
        <HStack spacing={5} marginBottom={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
      </Box>
      <GameGrid />
    </GridItem>
  </Grid>
);

export default HomePage;
