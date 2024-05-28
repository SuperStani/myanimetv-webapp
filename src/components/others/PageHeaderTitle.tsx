import { Box, Stack, Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

const PageHeaderTitle = ({ text }: Props) => {
  return (
    <Stack
      position="sticky"
      top="0"
      zIndex="1"
      spacing={2}
      bg={"gray.800"}
      paddingTop={2}
    >
      <Text fontFamily={"Mochiy Pop One"} align={"left"}>
        {text}
      </Text>
      <Box
        width="100%"
        height={["3px", "5px", "7px"]}
        bgGradient="linear(to-l, #213944, #2a4cbd)"
      />
    </Stack>
  );
};

export default PageHeaderTitle;
