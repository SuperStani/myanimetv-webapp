import { SimpleGrid } from "@chakra-ui/react";
import useAnime from "../../services/anime/hooks/useAnime";
import AnimeCard from "./AnimeCard";
import AnimeCardContainer from "./AnimeCardContainer";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import { SearchFilter } from "../../services/anime/interfaces/SearchFilter";
import { Anime } from "../../services/anime/interfaces/Anime";
import { useState } from "react";
import usePageScroll from "../../services/anime/hooks/usePageScroll";

interface Props {
  searchFilter: SearchFilter;
}

const AnimeGrid = ({ searchFilter }: Props) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isEmptyData } = useAnime<Anime>(
    page,
    searchFilter
  );
  usePageScroll(
    !isLoading && !isEmptyData,
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
        Array.from({ length: 9 }, (_, index) => (
          <AnimeCardSkeleton key={index} />
        ))}
    </SimpleGrid>
  );
};

export default AnimeGrid;
