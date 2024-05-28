import { Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

const AnimeCardSkeleton = () => {
  return (
    <Stack>
      <Skeleton height={{ base: "130px", md: "250px", lg: "290px" }}></Skeleton>
      <SkeletonText noOfLines={1} />
    </Stack>
  );
};

export default AnimeCardSkeleton;
