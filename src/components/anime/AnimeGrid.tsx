import { SimpleGrid } from "@chakra-ui/react";
import useAnime from "../../services/anime/hooks/useAnime";
import AnimeCard from "./AnimeCard";
import AnimeCardContainer from "./AnimeCardContainer";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import { SearchFilter } from "../../services/anime/interfaces/SearchFilter";
import { Anime } from "../../services/anime/interfaces/Anime";
import { useState } from "react";
import usePageScroll from "../../services/anime/hooks/usePageScroll";
import DefaultConfig from "../../config/DefaultConfig";

interface Props {
  searchFilter: SearchFilter;
  pagiantionOnScroll?: boolean;
}

const AnimeGrid = ({ searchFilter, pagiantionOnScroll = true }: Props) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isEmptyData } = useAnime<Anime>(
    searchFilter,
    page
  );
  usePageScroll(
    !isLoading &&
      !isEmptyData &&
      pagiantionOnScroll &&
      (searchFilter.maxPages ? searchFilter.maxPages > page : true),
    () => {
      setPage(page + 1);
    },
    [isLoading, isEmptyData]
  );
  if (error) return null;

  return (
    <SimpleGrid spacing={2} columns={{ base: 3, md: 4, lg: 5 }} mb={4}>
      {data.map((anime) => (
        <AnimeCardContainer key={anime.id}>
          <AnimeCard anime={anime} />
        </AnimeCardContainer>
      ))}
      {isLoading &&
        Array.from(
          { length: DefaultConfig.searchItemsLimitPerPage },
          (_, index) => (
            <AnimeCardContainer key={index}>
              <AnimeCardSkeleton key={index} />
            </AnimeCardContainer>
          )
        )}
    </SimpleGrid>
  );
};

export default AnimeGrid;
