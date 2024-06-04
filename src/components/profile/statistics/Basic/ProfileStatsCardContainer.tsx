import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProfileStatsCardContainer = ({ children }: Props) => {
  return (
    <Box
      height={{ base: "70px", md: "100px", lg: "110px" }}
      bg={"gray.900"}
      borderRadius={6}
    >
      {children}
    </Box>
  );
};

export default ProfileStatsCardContainer;
