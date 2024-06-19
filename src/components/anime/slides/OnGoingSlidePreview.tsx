import { Box } from "@chakra-ui/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperComponent.css";
import useAnime from "../../../services/anime/hooks/useAnime";
import { Anime } from "../../../services/anime/interfaces/Anime";
import { SearchFilter } from "../../../services/anime/interfaces/SearchFilter";
import AnimeCard from "../AnimeCard";
import AnimeOngoingSlideCardContainer from "./AnimeOngoingSlideCardContainer";

const OnGoingSlidePreview = () => {
  const { data, isLoading } = useAnime<Anime>(
    { ongoing: "bests", maxPages: 1 } as SearchFilter,
    1,
    12
  );
  return (
    <Box mb={5} w={"100%"} overflow={"hidden"}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination
        modules={[Pagination, Autoplay]}
        className="OngoinPreview"
      >
        {data.map((a) => (
          <SwiperSlide key={a.id}>
            <AnimeOngoingSlideCardContainer>
              <AnimeCard anime={a}></AnimeCard>
            </AnimeOngoingSlideCardContainer>
          </SwiperSlide>
        ))}
        {isLoading && <SwiperSlide>1</SwiperSlide>}
      </Swiper>
    </Box>
  );
};
export default OnGoingSlidePreview;
