import useGenres, { Genre } from "../hooks/useGenres";
import {
  Image,
  List,
  ListItem,
  HStack,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../services/store";

const GenreList = () => {
  const genreId = useGameQueryStore((s) => s.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data, isLoading, error } = useGenres();
  if (error) return null; // not really in use since genres are static
  if (isLoading) return <Spinner />; // not really in use since genres are static

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.results?.map((genre: Genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                borderRadius={8}
                paddingY="5px"
                boxSize="32px"
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id == genreId ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => setGenreId(genre.id)}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
