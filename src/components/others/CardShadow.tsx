import { Box } from "@chakra-ui/react";

const CardShadow = () => {
  return (
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
  );
};

export default CardShadow;
