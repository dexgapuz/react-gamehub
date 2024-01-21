import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import { useGenres } from '../hooks/UseGenres';
import { getCropedImageUrl } from '../services/ImageUrl';

const GenreList = () => {
  const { data } = useGenres();
  return (
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
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
