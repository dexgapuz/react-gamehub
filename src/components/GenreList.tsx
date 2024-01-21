import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { Genre, useGenres } from '../hooks/UseGenres';
import { getCropedImageUrl } from '../services/ImageUrl';

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <>
      {isLoading && <Spinner />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                src={getCropedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                paddingY="5px"
              ></Image>
              <Button
                fontSize="large"
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
