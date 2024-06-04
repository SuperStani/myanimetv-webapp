import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const SearchPageTemplate = ({ children }: Props) => {
  return (
    <Container maxW="container.lg" centerContent>
      <Box width={"100%"}>{children}</Box>
    </Container>
  );
};

export default SearchPageTemplate;
