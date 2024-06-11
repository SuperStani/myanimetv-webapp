import { Badge, HStack, Text } from "@chakra-ui/react";

interface Props {
  text: string | number;
  icon?: {
    source: any;
    color: string;
  };
}
const AnimeCardBadgeTopRight = ({ text, icon }: Props) => {
  return (
    <Badge top={1} right={1} position="absolute" bg={"blue.600"}>
      <HStack spacing={0.5}>
        {icon && <Text as={icon?.source} color={icon?.color} />}
        <Text
          fontFamily={"Roboto, sans-serif"}
          margin={0}
          fontSize={{ base: "10px", md: "12px", lg: "13px" }}
        >
          {text}
        </Text>
      </HStack>
    </Badge>
  );
};

export default AnimeCardBadgeTopRight;
