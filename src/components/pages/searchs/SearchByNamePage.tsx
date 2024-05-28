import { useParams } from "react-router-dom";
import { SearchFilter } from "../../../services/anime/interfaces/SearchFilter";
import SearchPageTemplate from "../../templates/SearchPageTemplate";
import AppText from "../../../langs/AppTexts";
import DefaultConfig from "../../../config/DefaultConfig";

const SearchByNamePage = () => {
  const { lang, search } = useParams();
  const filter = { name: search, lang } as SearchFilter;
  return (
    <SearchPageTemplate
      filter={filter}
      headerTitle={
        AppText.searchByName[lang as keyof any]?.replace("{keyword}", search) ||
        AppText.searchByName[DefaultConfig.defaultLang].replace(
          "{keyword}",
          search
        )
      }
    />
  );
};

export default SearchByNamePage;
