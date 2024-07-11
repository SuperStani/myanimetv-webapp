import getText from "../../../services/lang/GetText";
import { useParams } from "react-router-dom";
import SearchPageTemplate from "../../templates/Search/SearchPageTemplate";
import PageSectionContainer from "../../others/PageSectionContainer";
import { Box, Stack, Text } from "@chakra-ui/react";
import useData from "../../../services/API/AnimeServices/hooks/useData";
import EpisodesCardContainer from "../../episodes/EpisodesCardContainer";
import EpisodesCalendarCard from "../../episodes/EpisodesCalendarCard";
import CalendarEpisode from "../../../services/anime/interfaces/CalendarEpisode";
import EpisodeCardSkeleton from "../../episodes/EpisodesSkeleton";
import { CalendarWeek } from "react-bootstrap-icons";

export default function CalendarPage() {
  const { lang } = useParams();
  const { data, isLoading } = useData<any>("/anime/airing");

  const localizedWeeklyCalendar = createWeeklyCalendar(new Date());
  const localizedWeekDays: any[] = getText("weekDays", lang);

  function getMonthName(monthIndex: number) {
    const localizedMonthNames: string[] = getText("monthNames", lang);
    return localizedMonthNames[monthIndex];
  }

  function formatDate(date: Date) {
    const day = date.getDate();
    const month = getMonthName(date.getMonth());
    return `${day} ${month}`;
  }

  function createWeeklyCalendar(startDate: Date) {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);

    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    return `${formattedStartDate} - ${formattedEndDate}`;
  }

  return (
    <SearchPageTemplate>
      <PageSectionContainer
        headerTitle={{
          text: `${getText("calendar", lang)} ${localizedWeeklyCalendar}`,
          icon: CalendarWeek,
        }}
      >
        <Stack spacing={3} width={"100%"} mb={10}>
          {localizedWeekDays.map((dayObj, index) => (
            <Box>
              <Box
                paddingY={1}
                bgGradient="linear(to-l, #213944, #2a4cbd)"
                width={"100%"}
                mb={2}
                textAlign={"center"}
                position={"sticky"}
                top={9}
                zIndex={1000 + index}
              >
                <Text
                  textTransform={"uppercase"}
                  fontFamily={"Poppins, sans-serif"}
                >
                  {dayObj.day_name}
                </Text>
              </Box>
              <Stack spacing={2}>
                {isLoading &&
                  Array.from({ length: 4 }, (_, index) => (
                    <EpisodesCardContainer key={index}>
                      <EpisodeCardSkeleton />
                    </EpisodesCardContainer>
                  ))}
                {!isLoading &&
                  data[index].map((anime: CalendarEpisode) => (
                    <EpisodesCardContainer>
                      <EpisodesCalendarCard episode={anime} />
                    </EpisodesCardContainer>
                  ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </PageSectionContainer>
    </SearchPageTemplate>
  );
}
