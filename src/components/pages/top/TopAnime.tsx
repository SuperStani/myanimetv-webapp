import { useState } from "react";
import SearchPageTemplate from "../../templates/Search/SearchPageTemplate";
import PageSectionContainer from "../../others/PageSectionContainer";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  HStack,
} from "@chakra-ui/react";
import { SearchFilter } from "../../../services/anime/interfaces/SearchFilter";
import AnimeGrid from "../../anime/AnimeGrid";
import getText from "../../../services/lang/GetText";
import { useParams } from "react-router-dom";
import {
  BalloonHeartFill,
  ChatSquare,
  ChatSquareHeart,
  HeartFill,
  Hearts,
  PlayBtnFill,
  StarFill,
} from "react-bootstrap-icons";

const TopAnime = () => {
  const [tabIndex, setIndex] = useState(0);
  const { lang } = useParams();
  return (
    <SearchPageTemplate>
      <PageSectionContainer headerTitle={{ text: "TOP ANIME" }}>
        <Tabs isFitted onChange={(index) => setIndex(index)}>
          <TabList mb="1em">
            <Tab>
              <HStack>
                <Text as={StarFill} color={"yellow.400"}></Text>
                <Text>{getText("mostVoted", lang)}</Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack>
                <Text as={PlayBtnFill} color={"red.400"}></Text>
                <Text>{getText("mostViewed", lang)}</Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack>
                <Text as={HeartFill} color={"red.600"}></Text>
                <Text>{getText("mostLoved", lang)}</Text>
              </HStack>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={0}>
              <AnimeGrid
                pagiantionOnScroll={tabIndex == 0}
                searchFilter={
                  { ranking: "rating", maxPages: 3 } as SearchFilter
                }
              />
            </TabPanel>
            <TabPanel p={0}>
              <AnimeGrid
                pagiantionOnScroll={tabIndex == 1}
                searchFilter={{ ranking: "views", maxPages: 3 } as SearchFilter}
              />
            </TabPanel>
            <TabPanel p={0}>
              <AnimeGrid
                pagiantionOnScroll={tabIndex == 2}
                searchFilter={
                  { ranking: "preferreds", maxPages: 3 } as SearchFilter
                }
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </PageSectionContainer>
    </SearchPageTemplate>
  );
};

export default TopAnime;
