import { useParams } from "react-router-dom";
import { SearchFilter } from "../../../services/anime/interfaces/SearchFilter";
import SearchPageTemplate from "../../templates/Search/SearchPageTemplate";
import AnimeGrid from "../../anime/AnimeGrid";
import PageSectionContainer from "../../others/PageSectionContainer";
import getText from "../../../services/lang/GetText";

const SearchByYearPage = () => {
  const { lang, year } = useParams();
  const filter = { year, lang } as SearchFilter;
  return (
    <SearchPageTemplate>
      <PageSectionContainer
        headerTitle={{
          text: getText("searchByYear", lang).replace("{keyword}", year),
        }}
      >
        <AnimeGrid searchFilter={filter} />
      </PageSectionContainer>
    </SearchPageTemplate>
  );
};

export default SearchByYearPage;
