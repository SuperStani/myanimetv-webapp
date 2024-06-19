import { Stack } from "@chakra-ui/react";
import PageSectionContainer from "../../others/PageSectionContainer";

import ProfileStats from "../../profile/statistics/Basic/ProfileStats";
import ProfileHomePageTemplate from "../../templates/Profile/ProfileHomePageTemplate";
import { SearchFilter } from "../../../services/anime/interfaces/SearchFilter";
import { useParams } from "react-router-dom";
import AnimeSlidesPreview from "../../anime/slides/AnimeSlidesPreview";
import {
  BarChartLineFill,
  BookmarksFill,
  HeartFill,
} from "react-bootstrap-icons";
import getText from "../../../services/lang/GetText";

const ProfileHome = () => {
  const { userId, lang } = useParams();
  return (
    <ProfileHomePageTemplate active={2}>
      <Stack spacing={1}>
        <PageSectionContainer
          headerTitle={{
            text: getText("stats", lang),
            icon: BarChartLineFill,
            stickyHeader: false,
          }}
        >
          <ProfileStats />
        </PageSectionContainer>
        <PageSectionContainer
          headerTitle={{
            text: getText("watchlist", lang),
            icon: BookmarksFill,
            stickyHeader: false,
            redirectTo: "/" + lang + "/profile/" + userId + "/anime/watchlist",
          }}
        >
          <AnimeSlidesPreview
            filter={
              {
                profile: { recentViewed: true, userId, lang },
              } as SearchFilter
            }
          />
        </PageSectionContainer>
        <PageSectionContainer
          headerTitle={{
            text: getText("preferreds", lang),
            icon: HeartFill,
            stickyHeader: false,
            redirectTo: "/" + lang + "/profile/" + userId + "/anime/preferreds",
          }}
        >
          <AnimeSlidesPreview
            filter={
              { profile: { preferreds: true, userId, lang } } as SearchFilter
            }
          />
        </PageSectionContainer>
      </Stack>
    </ProfileHomePageTemplate>
  );
};

export default ProfileHome;
