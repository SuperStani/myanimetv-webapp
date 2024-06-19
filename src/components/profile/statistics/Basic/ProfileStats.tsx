import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Box, Text } from "@chakra-ui/react";
import ProfileStatsCard from "./ProfileStatsCard";
import ProfileStatsCardContainer from "./ProfileStatsCardContainer";
import ProfileStatsTime from "./ProfileStatsTime";
import useBasicStats from "../../../../services/profile/hooks/useBasicStats";
import { useParams } from "react-router-dom";
import getTimeDifference from "../../../../services/profile/utilities/GetTimeDifference";
import ProfileStatsCardSkeleton from "./ProfileStatsCardSkeleton";
import { ChatDots, Film, HourglassSplit } from "react-bootstrap-icons";
import getText from "../../../../services/lang/GetText";

const ProfileStats = () => {
  const { userId, lang } = useParams();
  const { data, isLoading } = useBasicStats(userId);
  const time = getTimeDifference(data?.episodes.totalTime ?? 0);

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
        <SwiperSlide style={{ width: "35%" }}>
          <ProfileStatsCardContainer>
            <ProfileStatsCard
              icon={HourglassSplit}
              title={getText("animetime", lang)}
            >
              <ProfileStatsTime
                months={time.months}
                days={time.days}
                hours={time.hours}
              ></ProfileStatsTime>
            </ProfileStatsCard>
          </ProfileStatsCardContainer>
        </SwiperSlide>
        <SwiperSlide style={{ width: "35%" }}>
          <ProfileStatsCardContainer>
            <ProfileStatsCard
              title={getText("episodesWatched", lang)}
              icon={Film}
            >
              <Text fontSize={{ base: "18px", lg: "20px" }}>
                {data?.episodes.totalEpisodes}
              </Text>
            </ProfileStatsCard>
          </ProfileStatsCardContainer>
        </SwiperSlide>
        <SwiperSlide style={{ width: "35%" }}>
          <ProfileStatsCardContainer>
            <ProfileStatsCard title={getText("animeWatched", lang)} icon={Film}>
              <Text fontSize={{ base: "18px", lg: "20px" }}>
                {data?.totalAnime}
              </Text>
            </ProfileStatsCard>
          </ProfileStatsCardContainer>
        </SwiperSlide>
        <SwiperSlide style={{ width: "35%" }}>
          <ProfileStatsCardContainer>
            <ProfileStatsCard title={getText("filmWatched", lang)} icon={Film}>
              <Text fontSize={{ base: "18px", lg: "20px" }}>
                {data?.totalMovies}
              </Text>
            </ProfileStatsCard>
          </ProfileStatsCardContainer>
        </SwiperSlide>
        <SwiperSlide style={{ width: "35%" }}>
          <ProfileStatsCardContainer>
            <ProfileStatsCard title={getText("comments", lang)} icon={ChatDots}>
              <Text fontSize={{ base: "18px", lg: "20px" }}>???</Text>
            </ProfileStatsCard>
          </ProfileStatsCardContainer>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ProfileStats;
