import { Box, Divider, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { EpisodeComment } from "../../services/anime/interfaces/EpisodeComment";
import formatDateTime from "../../services/utils/TimeFormat";
import { TrashFill } from "react-bootstrap-icons";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";

interface Props {
  comment: EpisodeComment;
  onDelete: (id: number) => void;
}

const CommentCard = ({ comment, onDelete }: Props) => {
  const webAppData = useWebApp();

  return (
    <Stack spacing={1.5}>
      <HStack justify="space-between">
        <Box>
          <Text fontSize={"14px"}>{comment.user.name}</Text>
        </Box>
        {comment.user.id == parseInt(webAppData.initDataUnsafe.user.id) && (
          <Box
            flex={"right"}
            cursor={"pointer"}
            onClick={() => onDelete(comment.id)}
          >
            <Icon as={TrashFill} color={"red.400"}></Icon>
          </Box>
        )}
      </HStack>
      <Box w={"100%"} textAlign={"right"}>
        <Text fontFamily={"Poppins, sans-serif"} fontSize={"11px"}>
          {formatDateTime(comment.datetime)}
        </Text>
      </Box>
      <Divider></Divider>
      <Box>
        <Text fontSize={"14px"} fontFamily={"Lato, sans-serif"}>
          {comment.text}
        </Text>
      </Box>
    </Stack>
  );
};

export default CommentCard;
