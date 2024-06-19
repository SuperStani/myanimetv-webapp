import { useParams } from "react-router-dom";
import { Box, Stack, Text } from "@chakra-ui/react";
import useData from "../../../../services/API/AnimeServices/hooks/useData";
import EpisodeCommentsTemplate from "../../../templates/comments/EpisodeCommentsTemplate";
import PageSectionContainer from "../../../others/PageSectionContainer";
import EpisodesCardContainer from "../../../episodes/EpisodesCardContainer";
import EpisodesCard from "../../../episodes/EpisodesCard";
import EpisodeCardSkeleton from "../../../episodes/EpisodesSkeleton";
import { Anime } from "../../../../services/anime/interfaces/Anime";
import { EpisodeComment } from "../../../../services/anime/interfaces/EpisodeComment";
import useDataMany from "../../../../services/API/AnimeServices/hooks/useDataMany";
import { useState } from "react";
import CommentCardContainer from "../../../comments/CommentCardContainer";
import CommentCard from "../../../comments/CommentCard";
import CommentInputArea from "../../../comments/CommentInputArea";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";
import saveNewComment from "../../../../services/anime/utilities/SaveComment";
import deleteCommentById from "../../../../services/anime/utilities/DeleteComment";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import getText from "../../../../services/lang/GetText";
import { ChatFill } from "react-bootstrap-icons";

const MySwal = withReactContent(Swal);

function AnimeEpisodeComments() {
  const { lang, animeId, episodeNumber } = useParams();
  const [commentText, setCommentText] = useState("");
  const [isCommentSent, setCommentSent] = useState(0);
  const { data: animeData, isLoading } = useData<Anime>("/anime/" + animeId, {
    params: { lang: lang },
  });
  const { data: commentsData, isLoading: isLoadingComments } =
    useDataMany<EpisodeComment>(
      `/episodes/${animeId}/${episodeNumber}/comments`,
      {
        params: { lang: lang },
      },
      [isCommentSent],
      false
    );
  const webAppData = useWebApp();
  const handleSendComment = () => {
    if (animeId && episodeNumber && lang && commentText.length > 9) {
      saveNewComment(
        webAppData.initDataUnsafe.user.id,
        parseInt(animeId),
        parseInt(episodeNumber),
        commentText,
        lang,
        webAppData.initDataUnsafe
      ).then((res) => {
        if (res.data.id) {
          setCommentSent(res.data.id);
        }
      });
      setCommentText("");
    }
  };

  const handleDeleteClick = (id: number) => {
    MySwal.fire({
      title: getText("areYouSure", lang),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: getText("yesDelete", lang),
      cancelButtonText: getText("cancel", lang),
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCommentById(id, webAppData.initDataUnsafe)
          .then(() => {
            setCommentSent(id - 1);
          })
          .catch(() => setCommentSent(id - 1));
        MySwal.fire(
          getText("deleted", lang),
          getText("commentDeleted", lang),
          "success"
        );
      }
    });
  };

  return (
    <EpisodeCommentsTemplate>
      <Stack pt={3} position="relative" spacing={3}>
        <Box
          height={{ base: "10%", md: "20%", lg: "30%" }}
          position="sticky"
          top={0}
          zIndex={100}
          bg={"gray.800"}
        >
          <PageSectionContainer
            headerTitle={{ text: getText("comments", lang), icon: ChatFill }}
          >
            {!isLoading && animeData && (
              <EpisodesCardContainer>
                <EpisodesCard
                  episode={{
                    anime: animeData,
                    episodeNumber: parseInt(episodeNumber ?? ""),
                  }}
                />
              </EpisodesCardContainer>
            )}
            {isLoading && (
              <EpisodesCardContainer>
                <EpisodeCardSkeleton />
              </EpisodesCardContainer>
            )}
          </PageSectionContainer>
        </Box>

        <PageSectionContainer>
          <Stack mb={10}>
            {!isLoadingComments &&
              commentsData?.map((c, index) => (
                <CommentCardContainer key={index}>
                  <CommentCard
                    onDelete={handleDeleteClick}
                    comment={c}
                  ></CommentCard>
                </CommentCardContainer>
              ))}
            {commentsData.length == 0 && (
              <CommentCardContainer>
                <Text textAlign={"center"}>
                  {getText("noCommentsFound", lang)}
                </Text>
              </CommentCardContainer>
            )}
          </Stack>
        </PageSectionContainer>

        <CommentInputArea
          handleSendComment={handleSendComment}
          valueText={commentText}
          setCommentText={setCommentText}
        />
      </Stack>
    </EpisodeCommentsTemplate>
  );
}

export default AnimeEpisodeComments;
