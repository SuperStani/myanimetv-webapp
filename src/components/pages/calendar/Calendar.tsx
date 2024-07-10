import getText from "../../../services/lang/GetText";
import { useParams } from "react-router-dom";
import SearchPageTemplate from "../../templates/Search/SearchPageTemplate";
import PageSectionContainer from "../../others/PageSectionContainer";
import { Box, Container, Stack } from "@chakra-ui/react";
import useData from "../../../services/API/AnimeServices/hooks/useData";
import EpisodesCardContainer from "../../episodes/EpisodesCardContainer";
import EpisodesCalendarCard from "../../episodes/EpisodesCalendarCard";
import CalendarEpisode from "../../../services/anime/interfaces/CalendarEpisode";

export default function Calendar() {
    const { lang } = useParams();
    const { data, isLoading } = useData("/anime/airing");

    const today = new Date();
    const localizedWeeklyCalendar = createWeeklyCalendar(today);
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

    if (isLoading) return <div>Loading</div>

    return (
        <SearchPageTemplate>
            <PageSectionContainer headerTitle={{ text: `${getText("calendar", lang)} ${localizedWeeklyCalendar}` }}>
                <Stack
                    spacing={3}
                    alignContent={"center"}
                    alignItems={"center"}
                    justifyContent={"center"}>

                    <Stack
                        spacing={2}
                        width={"100%"}>
                        {localizedWeekDays.map((dayObj, index) => (
                            <Container maxWidth={'100%'}>
                                <Box
                                    padding={'5px 10px'}
                                    fontSize={'x-large'}
                                    fontWeight={'bold'}
                                    bgGradient="linear(to-l, #213944, #2a4cbd)"
                                    width={"100%"}>
                                    {dayObj.day_name}
                                </Box>
                                <Stack spacing={2}>
                                    {data[index].map((anime: CalendarEpisode) => (<EpisodesCardContainer>
                                        <EpisodesCalendarCard episode={anime} />
                                    </EpisodesCardContainer>))}
                                </Stack>
                            </Container>
                        ))}
                    </Stack>
                </Stack>
            </PageSectionContainer>
        </SearchPageTemplate>
    );
}
