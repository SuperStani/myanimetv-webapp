import { Box, Icon } from "@chakra-ui/react";
import { PlayCircleFill } from "react-bootstrap-icons";

const AnimePlayEffect = () => {
  return (
    <Box
      w={"100%"}
      h={"100%"}
      bg="rgba(0, 0, 0, 0.6)"
      position="absolute"
      bottom={0}
      top={0}
    >
      <Box
        position="absolute"
        bottom="50%"
        left="50%"
        transform="translate(-50%, 50%)"
        style={{
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Icon as={PlayCircleFill} boxSize={10} />
      </Box>
    </Box>
  );
};

export default AnimePlayEffect;
