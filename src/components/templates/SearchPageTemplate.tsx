import PageSectionContainer from "../others/PageSectionContainer";
import AnimeGrid from "../anime/AnimeGrid";
import { SearchFilter } from "../../services/anime/interfaces/SearchFilter";
import { Box, Container } from "@chakra-ui/react";

interface Props {
  headerTitle?: string;
  filter: SearchFilter;
}
const SearchPageTemplate = ({ headerTitle, filter }: Props) => {
  return (
    <Container maxW="container.lg" centerContent>
      <Box width={"100%"}>
        <PageSectionContainer headerTitle={headerTitle}>
          <AnimeGrid searchFilter={filter} />
        </PageSectionContainer>
      </Box>
    </Container>
  );
};

export default SearchPageTemplate;
