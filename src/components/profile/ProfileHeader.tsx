import {
  Box,
  HStack,
  Image,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useProfileTelegram from "../../services/telegram/hooks/useProfileTelegram";
import CardShadow from "../others/CardShadow";
import { useParams } from "react-router-dom";

const ProfileHeader = () => {
  const { userId } = useParams();
  const { data, isLoading } = useProfileTelegram(userId);

  return (
    <Box
      position={"relative"}
      height={{ base: "150px", lg: "300px" }}
      w={"100%"}
      overflow={"hidden"}
    >
      <Image
        src="/src/assets/anime/wallpapers/4037618.png"
        width="100%"
        height={"100%"}
        objectFit="cover"
        objectPosition="center"
      ></Image>
      <CardShadow />
      {isLoading && (
        <HStack position={"absolute"} bottom={2} left={2}>
          <SkeletonCircle boxSize={{ base: "50px", lg: "100px" }} />
          <Box width="100px">
            <SkeletonText noOfLines={2} />
          </Box>
        </HStack>
      )}
      {!isLoading && (
        <HStack position={"absolute"} bottom={2} left={2}>
          <Image
            borderRadius="full"
            src={data?.profile_photo}
            boxSize={{ base: "50px", lg: "100px" }}
          ></Image>
          <Text>{data?.first_name}</Text>
        </HStack>
      )}
    </Box>
  );
};

export default ProfileHeader;
