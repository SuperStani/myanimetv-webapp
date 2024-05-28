import { Box, Image, Text } from "@chakra-ui/react";
import { Anime } from "../../services/anime/interfaces/Anime";
import DefaultConfig from "../../config/DefaultConfig";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <>
      <Image
        src={DefaultConfig.cloudPath + anime.poster}
        width="100%"
        height="100%"
        objectFit="cover"
        objectPosition="center"
      />
      <Box
        position="absolute"
        width="100%"
        height={{ base: "80%", md: "50%", lg: "50%" }}
        bottom={0}
        opacity={"0.9"}
        background={
          "-webkit-gradient(linear, left bottom, left top, color-stop(0%, black), color-stop(20%, black), color-stop(70%, rgba(0, 0, 0, 0.049)), color-stop(100%, rgba(0, 0, 0, 0.010)))"
        }
      />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        padding={{ base: 2, md: 2, lg: 2 }}
      >
        <Text
          fontFamily={"Raleway"}
          fontWeight={"bold"}
          color="white"
          fontSize={{ base: "10px", md: "15px", lg: "17px" }}
          align={"left"}
        >
          {anime.name} {anime.season > 0 ? "S" + anime.season : ""}
        </Text>
      </Box>
    </>
  );
};

export default AnimeCard;
