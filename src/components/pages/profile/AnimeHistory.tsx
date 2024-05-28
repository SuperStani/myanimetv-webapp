import AnimeGrid from "../../anime/AnimeGrid";
import PageSectionContainer from "../../others/PageSectionContainer";
import ProfilePageTemplate from "../../templates/ProfilePageTemplate";
import { useParams } from "react-router-dom";
import { SearchFilter } from "../../../services/anime/interfaces/SearchFilter";

const AnimeHistory = () => {
  const { lang, userId } = useParams();
  const searchFilter = {
    lang,
    profile: { userId, history: true },
  } as SearchFilter;
  return (
    <ProfilePageTemplate active={0}>
      <PageSectionContainer headerTitle={"ANIME HISTORY"}>
        <AnimeGrid searchFilter={searchFilter}></AnimeGrid>
      </PageSectionContainer>
    </ProfilePageTemplate>
  );
};

export default AnimeHistory;
