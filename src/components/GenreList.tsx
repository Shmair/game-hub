import useGenres, { Genre } from "../hooks/useGenres";
import {
  Image,
  List,
  ListItem,
  HStack,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                borderRadius={8}
                paddingY="5px"
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(genre)}
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
