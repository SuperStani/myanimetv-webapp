import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const CommentCardContainer = ({ children }: Props) => {
  return (
    <Box
      bg={"gray.700"}
      color="white"
      w={"100%"}
      minH={{ base: "90px", md: "100px" }}
      borderRadius={5}
      p={3}
    >
      {children}
    </Box>
  );
};

export default CommentCardContainer;
