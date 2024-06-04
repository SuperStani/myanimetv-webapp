import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AnimeCardContainer = ({ children }: Props) => {
  return (
    <Box
      position="relative"
      width={"100%"}
      height={{ base: "150px", sm: "200px", md: "250px", lg: "260px" }}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default AnimeCardContainer;
