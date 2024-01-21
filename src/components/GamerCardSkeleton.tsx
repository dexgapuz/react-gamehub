import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GamerCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GamerCardSkeleton;
