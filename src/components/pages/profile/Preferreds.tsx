import { useParams } from "react-router-dom";
import { SearchFilter } from "../../../services/anime/interfaces/SearchFilter";
import AnimeGrid from "../../anime/AnimeGrid";
import PageSectionContainer from "../../others/PageSectionContainer";
import ProfileHomePageTemplate from "../../templates/Profile/ProfileHomePageTemplate";
import { BoxArrowLeft, HeartFill } from "react-bootstrap-icons";
import getText from "../../../services/lang/GetText";

const Preferreds = () => {
  const { userId, lang } = useParams();

  return (
    <ProfileHomePageTemplate active={2}>
      <PageSectionContainer
        headerTitle={{
          stickyHeader: true,
          text: getText("preferreds", lang),
          icon: HeartFill,
          redirectTo: "/" + lang + "/profile/" + userId,
          iconRedirectTo: BoxArrowLeft,
        }}
      >
        <AnimeGrid
          searchFilter={
            {
              profile: { preferreds: true, userId, lang },
            } as SearchFilter
          }
        />
      </PageSectionContainer>
    </ProfileHomePageTemplate>
  );
};

export default Preferreds;
