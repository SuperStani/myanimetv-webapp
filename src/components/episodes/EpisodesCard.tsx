import { Box, Stack, Heading, Image, Text, Icon } from "@chakra-ui/react";
import Episode from "../../services/anime/interfaces/Episode";
import DefaultConfig from "../../config/DefaultConfig";
import { PlayCircleFill } from "react-bootstrap-icons";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";
import openEpisode from "../../services/anime/utilities/OpenEpisode";

interface Props {
  episode: Episode;
}

const EpisodesCard = ({ episode }: Props) => {
  const WebApp = useWebApp();
  const handleClickEpisode = (id: number, episodeNumber: number) => {
    openEpisode(
      id,
      episodeNumber,
      () => WebApp.close(),
      WebApp.initDataUnsafe?.user?.id,
      WebApp.initData
    );
  };
  return (
    <>
      <Box maxW={"20%"}>
        <Image
          objectFit="cover"
          objectPosition="center"
          src={DefaultConfig.cloudPath + episode.anime.poster}
        />
      </Box>

      <Stack alignSelf="flex-start" mt={{ base: 2, md: 6 }} w={"70%"}>
        <Heading
          fontFamily={"Raleway"}
          fontSize={{ base: "13px", md: "20px", lg: "25px" }}
        >
          {episode.anime.name}{" "}
          {episode.anime.season > 0 ? "S" + episode.anime.season : ""}
        </Heading>
        <Text
          fontSize={{ base: "13px", md: "15px", lg: "20px" }}
          fontFamily={"Raleway"}
        >
          Episode {episode.episodeNumber}
        </Text>
      </Stack>
      <Box
        w={"10%"}
        alignSelf={"flex-center"}
        onClick={() =>
          handleClickEpisode(episode.anime.id, episode.episodeNumber)
        }
      >
        <Icon
          cursor={"pointer"}
          _active={{ color: "gray.400" }}
          boxSize={7}
          as={PlayCircleFill}
        ></Icon>
      </Box>
    </>
  );
};

export default EpisodesCard;
