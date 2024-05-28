import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AnimeCardContainer = ({ children }: Props) => {
  return (
    <Box position="relative" width={"100%"} height={"100%"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default AnimeCardContainer;
