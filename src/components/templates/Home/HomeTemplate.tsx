import { Box, Container, Stack } from "@chakra-ui/react";
import PageSectionContainer from "../../others/PageSectionContainer";
import OnGoingSlidePreview from "../../anime/slides/OnGoingSlidePreview";
import GoToTopButton from "../../others/GoToUpButton";
import AnimeSlidesPreview from "../../anime/slides/AnimeSlidesPreview";
import AnimeGrid from "../../anime/AnimeGrid";
import { useParams } from "react-router-dom";
import { Fire, MegaphoneFill, RocketTakeoffFill } from "react-bootstrap-icons";
import getText from "../../../services/lang/GetText";

const HomeTemplate = () => {
  const { lang } = useParams();
  return (
    <Box>
      <Container maxW="container.lg" w="100%" flex="1" position={"relative"}>
        <Stack position="relative" spacing={0}>
          <PageSectionContainer
            headerTitle={{
              text: "ONGOING",
              stickyHeader: false,
              icon: MegaphoneFill,
            }}
          >
            <OnGoingSlidePreview />
          </PageSectionContainer>
          <PageSectionContainer
            headerTitle={{
              text: getText("lastAnimeAired", lang),
              stickyHeader: false,
              icon: RocketTakeoffFill,
            }}
          >
            <AnimeSlidesPreview filter={{ lastAired: true }} />
          </PageSectionContainer>

          <PageSectionContainer
            headerTitle={{
              text: getText("lastAnimeEpisodes", lang),
              stickyHeader: false,
              icon: Fire,
            }}
          >
            <AnimeGrid
              searchFilter={{ lastUpdated: true, lang, maxPages: 3 }}
            />
          </PageSectionContainer>
        </Stack>
        <GoToTopButton />
      </Container>
    </Box>
  );
};

export default HomeTemplate;
