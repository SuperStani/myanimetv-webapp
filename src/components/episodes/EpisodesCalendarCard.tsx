import { Box, Stack, Heading, Image, Text, Icon } from "@chakra-ui/react";
import DefaultConfig from "../../config/DefaultConfig";
import { PlayCircleFill } from "react-bootstrap-icons";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";
import openAnime from "../../services/anime/utilities/OpenAnime";
import CalendarEpisode from "../../services/anime/interfaces/CalendarEpisode";
import getText from "../../services/lang/GetText";
import { useParams } from "react-router-dom";

interface Props {
    episode: CalendarEpisode;
}

const EpisodesCalendarCard = ({ episode }: Props) => {
    const { lang } = useParams()

    const WebApp = useWebApp();
    const handleClickEpisode = (id: number) => {
        openAnime(id, () => WebApp.close(), WebApp.initDataUnsafe?.user?.id, WebApp.initData);
    };
    const checkEpisodeIsOut = (unix_time: number): string => {
        const currentUnixTimestamp = parseInt((new Date().getTime() / 1000).toFixed(0));

        if (unix_time < currentUnixTimestamp) {
            return `${getText('calendarEpisode', lang).out} ${episode.time.slice(0, 5)}`;
        } else {
            return `${getText('calendarEpisode', lang).notOut} ${episode.time.slice(0, 5)}`;
        }
    };
    return (
        <>
            <Box maxW={"20%"}>
                <Image
                    objectFit="cover"
                    objectPosition="center"
                    src={DefaultConfig.cloudPath + episode.poster}
                />
            </Box>

            <Stack
                alignSelf="flex-start"
                mt={{ base: 2, md: 6 }}
                w={"70%"}>
                <Heading
                    noOfLines={2}
                    fontFamily={"Raleway"}
                    fontSize={{ base: "13px", md: "20px", lg: "25px" }}>
                    {episode.name} {episode.season > 0 ? "S" + episode.season : ""}
                </Heading>
                <Text
                    fontSize={{ base: "13px", md: "15px", lg: "20px" }}
                    fontFamily={"Raleway"}>
                    {getText('episode', lang)} {episode.episodeNumber} {checkEpisodeIsOut(episode.unix_time)}
                </Text>
            </Stack>
            <Box
                w={"10%"}
                alignSelf={"flex-center"}
                onClick={() => handleClickEpisode(episode.id)}>
                <Icon
                    cursor={"pointer"}
                    _active={{ color: "gray.400" }}
                    boxSize={7}
                    as={PlayCircleFill}></Icon>
            </Box>
        </>
    );
};

export default EpisodesCalendarCard;
