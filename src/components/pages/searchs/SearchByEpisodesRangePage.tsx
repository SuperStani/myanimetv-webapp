import { useParams } from "react-router-dom";
import { SearchFilter } from "../../../services/anime/interfaces/SearchFilter";
import SearchPageTemplate from "../../templates/Search/SearchPageTemplate";
import AnimeGrid from "../../anime/AnimeGrid";
import PageSectionContainer from "../../others/PageSectionContainer";
import getText from "../../../services/lang/GetText";

const SearchByEpisodesPage = () => {
  const { lang, epMin, epMax } = useParams();
  const filter = {
    episodesRange: { min: epMin, max: epMax },
    lang,
  } as SearchFilter;

  return (
    <SearchPageTemplate>
      <PageSectionContainer
        headerTitle={{
          text: getText("searchByEpisodes", lang).replace(
            "{keyword}",
            `${epMin}-${epMax}`
          ),
        }}
      >
        <AnimeGrid searchFilter={filter} />
      </PageSectionContainer>
    </SearchPageTemplate>
  );
};

export default SearchByEpisodesPage;
