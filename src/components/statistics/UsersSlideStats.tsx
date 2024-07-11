import { Box } from "@chakra-ui/react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import UsersStats from "../../services/anime/interfaces/UsersStats";
import useData from "../../services/API/AnimeServices/hooks/useData";
import ProfileStatsCardContainer from "../profile/statistics/Basic/ProfileStatsCardContainer";
import ProfileStatsCardSkeleton from "../profile/statistics/Basic/ProfileStatsCardSkeleton";
import ProfileStatsCard from "../profile/statistics/Basic/ProfileStatsCard";
import { ClipboardDataFill } from "react-bootstrap-icons";

interface Props {
  endpoint: string;
}
const UsersSlideStats = ({ endpoint }: Props) => {
  const { isLoading, data } = useData<UsersStats>(endpoint, {}, []);
  return (
    <Box mb={5} w={"100%"} overflow={"hidden"}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {isLoading &&
          Array.from({ length: 3 }, (_, index) => (
            <SwiperSlide style={{ width: "35%" }} key={index}>
              <ProfileStatsCardContainer>
                <ProfileStatsCardSkeleton />
              </ProfileStatsCardContainer>
            </SwiperSlide>
          ))}
        {!isLoading && (
          <SwiperSlide style={{ width: "35%" }}>
            <ProfileStatsCardContainer>
              <ProfileStatsCard icon={ClipboardDataFill} title={"TOTAL"}>
                {data?.total}
              </ProfileStatsCard>
            </ProfileStatsCardContainer>
          </SwiperSlide>
        )}
        {data?.langs.map((e) => (
          <SwiperSlide style={{ width: "35%" }}>
            <ProfileStatsCardContainer>
              <ProfileStatsCard
                icon={ClipboardDataFill}
                title={"TOTAL " + e.lang.toUpperCase()}
              >
                {e.tot}
              </ProfileStatsCard>
            </ProfileStatsCardContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default UsersSlideStats;
