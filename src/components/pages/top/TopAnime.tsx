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
import { HeartFill, PlayBtnFill, StarFill } from "react-bootstrap-icons";

const TopAnime = () => {
  const [tabIndex, setIndex] = useState(0);
  const { lang } = useParams();
  return (
    <SearchPageTemplate>
      <PageSectionContainer headerTitle={{ text: "TOP ANIME" }}>
        <Tabs isFitted onChange={(index) => setIndex(index)}>
          <TabList mb="1em">
            <Tab>
              <HStack
                spacing={1}
                alignContent={"center"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text
                  fontSize={{ base: "13px", md: "15px", lg: "15px" }}
                  as={StarFill}
                  color={"yellow.400"}
                ></Text>
                <Text fontSize={{ base: "11px", md: "15px", lg: "15px" }}>
                  {getText("mostVoted", lang)}
                </Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack spacing={1}>
                <Text
                  fontSize={{ base: "13px", md: "15px", lg: "15px" }}
                  as={PlayBtnFill}
                  color={"red.400"}
                ></Text>
                <Text fontSize={{ base: "11px", md: "15px", lg: "15px" }}>
                  {getText("mostViewed", lang)}
                </Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack spacing={1}>
                <Text
                  as={HeartFill}
                  color={"red.600"}
                  fontSize={{ base: "13px", md: "15px", lg: "15px" }}
                ></Text>
                <Text fontSize={{ base: "11px", md: "15px", lg: "15px" }}>
                  {getText("mostLoved", lang)}
                </Text>
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
