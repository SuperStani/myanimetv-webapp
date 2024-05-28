import { HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const EpisodesCardContainer = ({ children }: Props) => {
  return (
    <HStack
      overflow="hidden"
      bg="gray.900"
      spacing={4}
      paddingRight={2}
      borderRadius={6}
    >
      {children}
    </HStack>
  );
};

export default EpisodesCardContainer;
