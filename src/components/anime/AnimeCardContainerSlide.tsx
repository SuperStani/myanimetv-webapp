import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AnimeCardContainerSlide = ({ children }: Props) => {
  return (
    <Box
      position="relative"
      width={"100%"}
      height={{ base: "160px", sm: "200px", md: "250px", lg: "400px" }}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default AnimeCardContainerSlide;
