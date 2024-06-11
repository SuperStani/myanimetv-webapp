import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Box } from "@chakra-ui/react";
import { SearchFilter } from "../../../services/anime/interfaces/SearchFilter";
import useAnime from "../../../services/anime/hooks/useAnime";
import AnimeCard from "../AnimeCard";
import { Anime } from "../../../services/anime/interfaces/Anime";
import AnimeCardSkeleton from "../AnimeCardSkeleton";
import DefaultConfig from "../../../config/DefaultConfig";
import AnimeCardContainerSlide from "../AnimeCardContainerSlide";

interface Props {
  filter: SearchFilter;
}

const AnimeSlidesPreview = ({ filter }: Props) => {
  const { data, isLoading } = useAnime<Anime>(filter, 1, 8);
  return (
    <Box mb={5} w={"100%"} overflow={"hidden"}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="animeSlides"
      >
        {data.map((a) => (
          <SwiperSlide style={{ width: "35%" }} key={a.id}>
            <AnimeCardContainerSlide>
              <AnimeCard anime={a} />
            </AnimeCardContainerSlide>
          </SwiperSlide>
        ))}
        {isLoading &&
          Array.from(
            {
              length: DefaultConfig.searchItemsLimitPerPage,
            },
            (_, index) => (
              <SwiperSlide style={{ width: "32%" }} key={index}>
                <AnimeCardContainerSlide>
                  <AnimeCardSkeleton key={index} />
                </AnimeCardContainerSlide>
              </SwiperSlide>
            )
          )}
      </Swiper>
    </Box>
  );
};

export default AnimeSlidesPreview;
