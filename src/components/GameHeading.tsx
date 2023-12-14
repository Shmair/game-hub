import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: pdata } = usePlatforms();
  const { data: gdata } = useGenres();

  const platformName =
    pdata?.results.find((plat: Platform) => plat.id == gameQuery.platformId)
      ?.name || "";
  const genreName =
    gdata?.results.find((genre: Genre) => genre.id == gameQuery.genreId)
      ?.name || "";

  const heading = `${platformName} ${genreName}  Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
