import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import GoToTopButton from "../../others/GoToUpButton";

interface Props {
  children: ReactNode;
}
const SearchPageTemplate = ({ children }: Props) => {
  return (
    <Container maxW="container.lg" centerContent>
      <Box width={"100%"}>{children}</Box>
      <GoToTopButton />
    </Container>
  );
};

export default SearchPageTemplate;
