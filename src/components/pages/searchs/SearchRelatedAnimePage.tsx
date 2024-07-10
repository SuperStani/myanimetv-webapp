import { useParams } from "react-router-dom";
import { SearchFilter } from "../../../services/anime/interfaces/SearchFilter";
import SearchPageTemplate from "../../templates/Search/SearchPageTemplate";
import AnimeGrid from "../../anime/AnimeGrid";
import PageSectionContainer from "../../others/PageSectionContainer";
import getText from "../../../services/lang/GetText";

const SearchByRelatedAnimePage = () => {
  const { lang, animeId } = useParams();
  const filter = { related: animeId } as SearchFilter;
  return (
    <SearchPageTemplate>
      <PageSectionContainer
        headerTitle={{
          text: getText("searchByRelatedAnime", lang),
        }}
      >
        <AnimeGrid searchFilter={filter} />
      </PageSectionContainer>
    </SearchPageTemplate>
  );
};

export default SearchByRelatedAnimePage;
