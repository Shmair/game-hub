import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //on mobile we want only these area
        lg: `"nav nav" "aside main"`, // large devices > 1024px
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        main
      </GridItem>
    </Grid>
  );
}
export default App;
