import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../services/store";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.platformId);
  const platformName = usePlatform(platformId)?.name || "";

  const genreId = useGameQueryStore((s) => s.genreId);
  const genreName = useGenre(genreId)?.name || "";

  const heading = `${platformName} ${genreName}  Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
