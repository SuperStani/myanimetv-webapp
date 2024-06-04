import { useParams } from "react-router-dom";
import { SearchFilter } from "../../../services/anime/interfaces/SearchFilter";
import SearchPageTemplate from "../../templates/Search/SearchPageTemplate";
import AnimeGrid from "../../anime/AnimeGrid";
import PageSectionContainer from "../../others/PageSectionContainer";
import getText from "../../../services/lang/GetText";

const SearchByNamePage = () => {
  const { lang, search } = useParams();
  const filter = { name: search, lang } as SearchFilter;
  return (
    <SearchPageTemplate>
      <PageSectionContainer
        headerTitle={{
          text: getText("searchByName", lang).replace("{keyword}", search),
        }}
      >
        <AnimeGrid searchFilter={filter} />
      </PageSectionContainer>
    </SearchPageTemplate>
  );
};

export default SearchByNamePage;
