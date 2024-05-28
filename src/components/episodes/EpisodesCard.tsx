import { Box, Stack, Heading, Image, Text, Icon } from "@chakra-ui/react";
import Episode from "../../services/anime/interfaces/Episode";
import DefaultConfig from "../../config/DefaultConfig";
import { PlayCircleFill } from "react-bootstrap-icons";

interface Props {
  episode: Episode;
}

const EpisodesCard = ({ episode }: Props) => {
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
          fontSize={{ base: "15px", md: "20px", lg: "25px" }}
          size="md"
        >
          {episode.anime.name}{" "}
          {episode.anime.season > 0 ? "S" + episode.anime.season : ""}
        </Heading>
        <Text fontFamily={"Raleway"}>Episode {episode.episodeNumber}</Text>
      </Stack>
      <Box w={"10%"} alignSelf={"flex-center"}>
        <Icon boxSize={7} as={PlayCircleFill}></Icon>
      </Box>
    </>
  );
};

export default EpisodesCard;
