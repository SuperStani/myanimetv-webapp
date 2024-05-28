import { Box, HStack, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

const EpisodeCardSkeleton = () => {
  return (
    <HStack spacing={4} paddingRight={2} borderRadius={6}>
      <Box w={"20%"}>
        <Skeleton
          height={{
            base: "70px",
            sm: "90px",
            md: "200px",
            lg: "250px",
            xl: "300px",
          }}
        ></Skeleton>
      </Box>

      <Stack alignSelf="flex-start" mt={{ base: 2, md: 6 }} w={"70%"}>
        <SkeletonText noOfLines={2} />
      </Stack>
    </HStack>
  );
};

export default EpisodeCardSkeleton;
