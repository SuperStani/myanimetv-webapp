import { SimpleGrid } from "@chakra-ui/react";
import { SearchFilter } from "../../services/anime/interfaces/SearchFilter";
import Episode from "../../services/anime/interfaces/Episode";
import useAnime from "../../services/anime/hooks/useAnime";
import EpisodesCard from "./EpisodesCard";
import { useState } from "react";
import usePageScroll from "../../services/anime/hooks/usePageScroll";
import EpisodeCardSkeleton from "./EpisodesSkeleton";
import EpisodesCardContainer from "./EpisodesCardContainer";

interface Props {
  searchFilter: SearchFilter;
  autoRefreshOnScroll?: boolean;
}

const EpisodesGrid = ({ searchFilter, autoRefreshOnScroll = false }: Props) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isEmptyData } = useAnime<Episode>(
    page,
    searchFilter
  );
  if (autoRefreshOnScroll) {
    usePageScroll(
      !isLoading && !isEmptyData && searchFilter?.maxPages,
      () => {
        console.log(isLoading, isEmptyData);
        setPage(page + 1);
      },
      [isLoading, isEmptyData]
    );
  }

  return (
    <SimpleGrid
      spacing={3}
      columns={1}
      templateRows={{
        base: "repeat(" + data.length + ",70px)",
        sm: "repeat(" + data.length + ",90px)",
        md: "repeat(" + data.length + ",200px)",
        lg: "repeat(" + data.length + ",250px)",
      }}
    >
      {data.map((e) => (
        <EpisodesCardContainer key={e.anime.id}>
          <EpisodesCard episode={e} />
        </EpisodesCardContainer>
      ))}

      {isLoading &&
        Array.from({ length: 9 }, (_, index) => (
          <EpisodeCardSkeleton key={index} />
        ))}
    </SimpleGrid>
  );
};

export default EpisodesGrid;
