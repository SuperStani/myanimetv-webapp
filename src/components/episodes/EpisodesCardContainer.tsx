import { Box, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const EpisodesCardContainer = ({ children }: Props) => {
  return (
    <Box h={{ base: "70px", sm: "100px", md: "200px", lg: "250px" }}
    >
      <HStack
        overflow="hidden"
        bg="gray.900"
        spacing={4}
        paddingRight={2}
        borderRadius={6}
        h={"100%"}
        alignItems={"center"}
        justifyItems={"center"}
      >
        {children}
      </HStack>
    </Box>
  );
};

export default EpisodesCardContainer;
