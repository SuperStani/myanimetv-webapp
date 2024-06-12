import { Box, Image, Text } from "@chakra-ui/react";
import { Anime } from "../../services/anime/interfaces/Anime";
import DefaultConfig from "../../config/DefaultConfig";
import CardShadow from "../others/CardShadow";
import { useInitData, useWebApp } from "@vkruglikov/react-telegram-web-app";
import openAnime from "../../services/anime/utilities/OpenAnime";
import { useState } from "react";
import { EyeFill, HeartFill, StarFill } from "react-bootstrap-icons";
import AnimePlayEffect from "./AnimePlayEffect";
import AnimeCardBadgeTopRight from "./AnimeCardBadgeTopRight";

interface Props {
	anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
	const WebApp = useWebApp();
	const [initDataUnsafe, initData] = useInitData();

	const [clicked, setClicked] = useState(false);

	if (clicked) {
		openAnime(anime.id, () => WebApp.close(), initDataUnsafe?.user?.id, initData);
	}

	return (
		<Box onClick={() => setClicked(true)}>
			<Image
				src={DefaultConfig.cloudPath + anime.poster}
				width="100%"
				height="100%"
				objectFit="cover"
				objectPosition="center"
			/>
			<CardShadow />
			<Box
				position="absolute"
				bottom="0"
				left="0"
				padding={{ base: 1, md: 2, lg: 2 }}>
				<Text
					fontFamily={"Raleway"}
					fontWeight={"bold"}
					color="white"
					fontSize={{ base: "12px", md: "15px", lg: "17px" }}
					lineHeight={1.1}
					align={"left"}>
					{anime.name} {anime.season > 0 ? "S" + anime.season : ""}
				</Text>
			</Box>
			{anime?.average && (
				<AnimeCardBadgeTopRight
					text={anime.average}
					icon={{ source: StarFill, color: "yellow.400" }}
				/>
			)}

			{anime?.viewCount && (
				<AnimeCardBadgeTopRight
					text={anime.viewCount}
					icon={{ source: EyeFill, color: "white.400" }}
				/>
			)}

			{anime?.preferredsCount && (
				<AnimeCardBadgeTopRight
					text={anime.preferredsCount}
					icon={{ source: HeartFill, color: "red.400" }}
				/>
			)}

			{clicked && <AnimePlayEffect />}
		</Box>
	);
};

export default AnimeCard;
