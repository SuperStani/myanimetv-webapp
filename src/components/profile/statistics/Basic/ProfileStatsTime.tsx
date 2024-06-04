import { HStack, Stack, Text } from "@chakra-ui/react";

interface Props {
  months: number;
  days: number;
  hours: number;
}

const ProfileStatsTime = ({ months, days, hours }: Props) => {
  return (
    <HStack justify={"space-between"} spacing={{ base: 2, lg: 5 }}>
      <Stack alignItems={"center"} spacing={0}>
        <Text fontSize={{ base: "20px", lg: "25px" }}>{months}</Text>
        <Text fontSize={{ base: "8px", lg: "11px" }}>MESI</Text>
      </Stack>
      <Stack alignItems={"center"} spacing={0}>
        <Text fontSize={{ base: "20px", lg: "25px" }}>{days}</Text>
        <Text fontSize={{ base: "8px", lg: "11px" }}>GIORNI</Text>
      </Stack>
      <Stack alignItems={"center"} spacing={0}>
        <Text fontSize={{ base: "20px", lg: "25px" }}>{hours}</Text>
        <Text fontSize={{ base: "8px", lg: "11px" }}>ORE</Text>
      </Stack>
    </HStack>
  );
};

export default ProfileStatsTime;
