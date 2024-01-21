import { SimpleGrid, Text } from '@chakra-ui/react';
import { useGames } from '../hooks/UseGames';
import GameCard from './GameCard';
import GamerCardSkeleton from './GamerCardSkeleton';

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [...Array(10).keys()];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GamerCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
