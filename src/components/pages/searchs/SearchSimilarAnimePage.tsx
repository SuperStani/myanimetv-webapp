import { useParams } from "react-router-dom";
import { SearchFilter } from "../../../services/anime/interfaces/SearchFilter";
import SearchPageTemplate from "../../templates/Search/SearchPageTemplate";
import AnimeGrid from "../../anime/AnimeGrid";
import PageSectionContainer from "../../others/PageSectionContainer";
import getText from "../../../services/lang/GetText";

const SearchSimilarAnimePage = () => {
  const { lang, animeId } = useParams();
  const filter = { similar: animeId } as SearchFilter;
  return (
    <SearchPageTemplate>
      <PageSectionContainer
        headerTitle={{
          text: getText("searchBySimilarAnime", lang),
        }}
      >
        <AnimeGrid searchFilter={filter} />
      </PageSectionContainer>
    </SearchPageTemplate>
  );
};

export default SearchSimilarAnimePage;
