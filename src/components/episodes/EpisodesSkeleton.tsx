import { Box, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

const EpisodeCardSkeleton = () => {
  return (
    <>
      <Box w={"20%"} height={"100%"}>
        <Skeleton height={"100%"}></Skeleton>
      </Box>

      <Stack alignSelf="flex-start" mt={{ base: 2, md: 6 }} w={"70%"}>
        <SkeletonText noOfLines={2} />
      </Stack>
    </>
  );
};

export default EpisodeCardSkeleton;
