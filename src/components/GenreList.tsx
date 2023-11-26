import useGenres from "../hooks/useGenres";
import { Image, Text, List, ListItem, HStack, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        {genres.map((genre) => (
          <ListItem>
            <HStack>
              <Image
                borderRadius={8}
                paddingY="5px"
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
