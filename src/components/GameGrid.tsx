import { useEffect, useState } from 'react';
import ApiClient from '../services/ApiClient';
import { Text } from '@chakra-ui/react';

interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  backgroundImage: string;
  rating: number;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    ApiClient.get<GamesResponse>('/games')
      .then(({ data }) => setGames(data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
