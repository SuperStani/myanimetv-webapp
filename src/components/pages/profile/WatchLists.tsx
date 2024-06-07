import { useState } from "react";
import { useParams } from "react-router-dom";
import ProfileHomePageTemplate from "../../templates/Profile/ProfileHomePageTemplate";
import PageSectionContainer from "../../others/PageSectionContainer";
import {
  Box,
  SkeletonText,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import AnimeGrid from "../../anime/AnimeGrid";
import { SearchFilter } from "../../../services/anime/interfaces/SearchFilter";
import WatchList from "../../../services/anime/interfaces/WatchList";
import useAnime from "../../../services/anime/hooks/useAnime";
import { BookmarksFill } from "react-bootstrap-icons";

const WatchLists = () => {
  const { userId, lang } = useParams();
  const [indexTab, setIndex] = useState(0);
  const { data, isLoading } = useAnime<WatchList>({
    getWatchLists: true,
  } as SearchFilter);
  return (
    <ProfileHomePageTemplate active={2}>
      <PageSectionContainer
        headerTitle={{
          stickyHeader: true,
          text: "WATCHLIST",
          icon: BookmarksFill,
        }}
      >
        <Tabs isFitted onChange={(index) => setIndex(index)}>
          <TabList mb="1em">
            {isLoading &&
              Array.from({ length: 3 }, (_, index) => (
                <Tab key={index}>
                  <Box w={"100%"}>
                    <SkeletonText noOfLines={1} />
                  </Box>
                </Tab>
              ))}
            {data.map((list) => (
              <Tab
                key={list.id}
                fontSize={{ base: "12px", md: "15px", lg: "15px" }}
              >
                {list.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {data.map((list, index) => (
              <TabPanel p={0} key={list.id}>
                <AnimeGrid
                  pagiantionOnScroll={index == indexTab}
                  searchFilter={
                    {
                      profile: { watchlist: list.id, userId, lang },
                    } as SearchFilter
                  }
                />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </PageSectionContainer>
    </ProfileHomePageTemplate>
  );
};

export default WatchLists;
