import { Box, Divider, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  icon: any;
  children: ReactNode;
}

const ProfileStatsCard = ({ title, icon, children }: Props) => {
  return (
    <Stack spacing={0} alignContent={"space-between"} h={"100%"}>
      <Box p={1} h={"25%"}>
        <HStack justifyContent={"center"} alignItems={"center"}>
          <Icon boxSize={{ base: 3, lg: 4 }} as={icon}></Icon>
          <Text
            textAlign={"center"}
            fontSize={{ base: "13px", lg: "18px" }}
            fontWeight={"bold"}
          >
            {title}
          </Text>
        </HStack>
      </Box>
      <Divider mt={2} />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        h={"75%"}
      >
        {children}
      </Box>
    </Stack>
  );
};

export default ProfileStatsCard;
