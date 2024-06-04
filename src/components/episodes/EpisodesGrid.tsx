import { SimpleGrid } from "@chakra-ui/react";
import { SearchFilter } from "../../services/anime/interfaces/SearchFilter";
import Episode from "../../services/anime/interfaces/Episode";
import useAnime from "../../services/anime/hooks/useAnime";
import EpisodesCard from "./EpisodesCard";
import { useState } from "react";
import usePageScroll from "../../services/anime/hooks/usePageScroll";
import EpisodeCardSkeleton from "./EpisodesSkeleton";
import EpisodesCardContainer from "./EpisodesCardContainer";
import DefaultConfig from "../../config/DefaultConfig";

interface Props {
  searchFilter: SearchFilter;
  autoRefreshOnScroll?: boolean;
}

const EpisodesGrid = ({ searchFilter, autoRefreshOnScroll = false }: Props) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isEmptyData } = useAnime<Episode>(
    searchFilter,
    page
  );

  if (autoRefreshOnScroll) {
    usePageScroll(
      !isLoading &&
        !isEmptyData &&
        (searchFilter.maxPages ? searchFilter.maxPages > page : true),
      () => {
        console.log(isLoading, isEmptyData);
        setPage(page + 1);
      },
      [isLoading, isEmptyData]
    );
  }

  return (
    <SimpleGrid spacing={3} columns={1} mb={10}>
      {data.map((e) => (
        <EpisodesCardContainer key={e.anime.id}>
          <EpisodesCard episode={e} />
        </EpisodesCardContainer>
      ))}

      {isLoading &&
        Array.from(
          {
            length: DefaultConfig.searchItemsLimitPerPage,
          },
          (_, index) => (
            <EpisodesCardContainer key={index}>
              <EpisodeCardSkeleton />
            </EpisodesCardContainer>
          )
        )}
    </SimpleGrid>
  );
};

export default EpisodesGrid;
