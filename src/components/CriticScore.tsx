import { Badge } from '@chakra-ui/react';

interface ScoreProps {
  score: number;
}

const CriticScore = ({ score }: ScoreProps) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
