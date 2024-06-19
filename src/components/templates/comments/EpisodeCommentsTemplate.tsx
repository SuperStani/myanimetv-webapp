import { Box, Container, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const EpisodeCommentsTemplate = ({ children }: Props) => {
  return (
    <Stack position="relative">
      <Container maxW="container.lg" centerContent>
        <Box width={"100%"}>{children}</Box>
      </Container>
    </Stack>
  );
};

export default EpisodeCommentsTemplate;
