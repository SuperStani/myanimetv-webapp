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
    <Badge position="absolute" top={1} right={1} bg={"blue.600"}>
      <HStack spacing={1}>
        <Text as={icon?.source} color={icon?.color} />
        <Text>{text}</Text>
      </HStack>
    </Badge>
  );
};

export default AnimeCardBadgeTopRight;
