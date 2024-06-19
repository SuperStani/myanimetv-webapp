import { Box, IconButton, Stack, Textarea } from "@chakra-ui/react";
import { SendFill } from "react-bootstrap-icons";

interface Props {
  valueText?: string;
  setCommentText: (value: string) => void;
  handleSendComment: () => void;
}

const CommentInputArea = ({
  setCommentText,
  valueText,
  handleSendComment,
}: Props) => {
  return (
    <Box
      position="sticky"
      bottom="0"
      width="100%"
      height="10%"
      zIndex={100}
      bg={"gray.800"}
      pb={5}
    >
      <Stack alignItems="center">
        <Textarea
          flex="1"
          placeholder="Write a comment..."
          bg={"gray.600"}
          outline={"none"}
          value={valueText} // Set the value of the textarea to the state
          onChange={(e) => setCommentText(e.target.value)}
        />
        <IconButton
          outline={"none"}
          borderRadius={5}
          onClick={handleSendComment}
          colorScheme="gray"
          aria-label="Search database"
          icon={<SendFill />}
          width={"100%"}
        >
          Commenta
        </IconButton>
      </Stack>
    </Box>
  );
};

export default CommentInputArea;
