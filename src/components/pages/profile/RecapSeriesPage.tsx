import { useParams } from "react-router-dom";
import ProfilePageTemplate from "../../templates/ProfilePageTemplate";
import PageSectionContainer from "../../others/PageSectionContainer";
import { SearchFilter } from "../../../services/anime/interfaces/SearchFilter";
import EpisodesGrid from "../../episodes/EpisodesGrid";
import { Stack } from "@chakra-ui/react";

const RecapSeriesPage = () => {
  const { lang, userId } = useParams();
  const searchFilter = {
    lang,
    profile: { userId, recap: "recently" },
  } as SearchFilter;
  const searchFilter2 = {
    lang,
    profile: { userId, recap: "old" },
  } as SearchFilter;
  return (
    <ProfilePageTemplate active={1}>
      <Stack spacing={2}>
        <PageSectionContainer headerTitle={"GUARDA IL PROSSIMO"}>
          <EpisodesGrid searchFilter={searchFilter}></EpisodesGrid>
        </PageSectionContainer>
        <PageSectionContainer headerTitle={"NON VEDI DA UN PO'"}>
          <EpisodesGrid
            searchFilter={searchFilter2}
            autoRefreshOnScroll={true}
          ></EpisodesGrid>
        </PageSectionContainer>
      </Stack>
    </ProfilePageTemplate>
  );
};

export default RecapSeriesPage;
