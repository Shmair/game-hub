import useGenres from "../hooks/useGenres";
import { Image, Text, List, ListItem, HStack } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres } = useGenres();
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
