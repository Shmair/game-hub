import useGenres from "../hooks/useGenres";
import { Image, Text, HStack } from "@chakra-ui/react";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <>
      {genres.map((genre) => (
        <HStack>
          <Image
            borderRadius={10}
            padding="5px"
            boxSize="20"
            src={genre.image_background}
          />
          <Text fontSize={20}>{genre.name}</Text>
        </HStack>
      ))}
    </>
  );
};

export default GenreList;
