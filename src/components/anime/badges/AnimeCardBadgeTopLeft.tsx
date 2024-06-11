import { Badge, HStack, Text } from "@chakra-ui/react";

interface Props {
  text: string | number;
  icon?: {
    source: any;
    color: string;
  };
  color?: string | null;
}
const AnimeCardBadgeTopLeft = ({ text, icon, color }: Props) => {
  return (
    <Badge top={1} left={1} position="absolute" bg={color ?? "blue.600"}>
      <HStack spacing={1} align="center" justify="center">
        {icon && <Text as={icon?.source} color={icon?.color} />}
        <Text
          fontFamily={"Roboto, sans-serif"}
          fontSize={{ base: "10px", md: "12px", lg: "13px" }}
        >
          {text}
        </Text>
      </HStack>
    </Badge>
  );
};

export default AnimeCardBadgeTopLeft;
