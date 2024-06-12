import { useParams } from "react-router-dom";
import getText from "../../../services/lang/GetText";
import PageSectionContainer from "../../others/PageSectionContainer";
import CommentsPageTemplate from "../../templates/Comments/CommentsPageTemplate";
import { useEffect, useState } from "react";
import useData from "../../../services/API/AnimeServices/hooks/useData";
import { Box, Center, CircularProgress, Text } from "@chakra-ui/react";
import EpisodesCard from "../../episodes/EpisodesCard";
import { Anime } from "../../../services/anime/interfaces/Anime";
import EpisodesCardContainer from "../../episodes/EpisodesCardContainer";

function AnimeEpComments() {
	const { lang, animeId, epNumber } = useParams();
	const { data: animeData } = useData<Anime[]>("/anime/name", { params: { keyword: animeId, lang: lang } }); //TODO: Cambiare la logica con cui si usa l'id del anime dai params per prendere i commenti
	const { data: commentsData } = useData<any[]>(`/anime/${animeId}/episode/${epNumber}/comments`, { params: { lang: lang } });

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (animeData && commentsData) setIsLoading(false);
	}, [animeData, commentsData]);

	return (
		<CommentsPageTemplate>
			<PageSectionContainer>
				<Box
					pt={"10px"}
					display={"flex"}
					flexDirection={"column"}
					gap={"10px"}>
					{isLoading === false && animeData ? (
						<EpisodesCardContainer>
							<EpisodesCard episode={{ anime: animeData[0], episodeNumber: parseInt(epNumber ?? "") }} />
						</EpisodesCardContainer>
					) : (
						<Center
							gap={"1rem"}
							mt={"2rem"}>
							<Text>{getText("loading", lang)}</Text>
							<CircularProgress isIndeterminate />
						</Center>
					)}
					<div>prova</div>
				</Box>
			</PageSectionContainer>
		</CommentsPageTemplate>
	);
}

export default AnimeEpComments;
