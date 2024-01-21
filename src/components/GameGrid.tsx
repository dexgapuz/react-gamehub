import { SimpleGrid, Text } from '@chakra-ui/react';
import { useGames } from '../hooks/UseGames';
import GameCard from './GameCard';
import GamerCardSkeleton from './GamerCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/UseGenres';
import { Platform } from '../hooks/UsePlatform';
import { GameQuery } from '../App';

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [...Array(10).keys()];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding="10px">
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GamerCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
