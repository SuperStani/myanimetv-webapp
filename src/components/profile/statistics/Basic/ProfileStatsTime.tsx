import { HStack, Stack, Text } from "@chakra-ui/react";
import getText from "../../../../services/lang/GetText";
import { useParams } from "react-router-dom";

interface Props {
  months: number;
  days: number;
  hours: number;
}

const ProfileStatsTime = ({ months, days, hours }: Props) => {
  const { lang } = useParams();
  return (
    <HStack justify={"space-between"} spacing={{ base: 2, lg: 5 }}>
      <Stack alignItems={"center"} spacing={0}>
        <Text fontSize={{ base: "20px", lg: "25px" }}>{months}</Text>
        <Text
          fontSize={{ base: "8px", lg: "11px" }}
          casing={{ base: "uppercase" }}
        >
          {getText("months", lang)}
        </Text>
      </Stack>
      <Stack alignItems={"center"} spacing={0}>
        <Text fontSize={{ base: "20px", lg: "25px" }}>{days}</Text>
        <Text
          fontSize={{ base: "8px", lg: "11px" }}
          casing={{ base: "uppercase" }}
        >
          {getText("days", lang)}
        </Text>
      </Stack>
      <Stack alignItems={"center"} spacing={0}>
        <Text fontSize={{ base: "20px", lg: "25px" }}>{hours}</Text>
        <Text
          fontSize={{ base: "8px", lg: "11px" }}
          casing={{ base: "uppercase" }}
        >
          {getText("hours", lang)}
        </Text>
      </Stack>
    </HStack>
  );
};

export default ProfileStatsTime;
