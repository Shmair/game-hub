import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //on mobile we want only these area
        lg: `"nav nav" "aside main"`, // large devices > 1024px
      }}
      templateColumns={{
        base: "1fr", // fr for fruction (small device) the columns streaches out and takes all the available space
        lg: "200px", //large device 2 columns the first takes 200px the second all the rest of the available space
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
export default App;
