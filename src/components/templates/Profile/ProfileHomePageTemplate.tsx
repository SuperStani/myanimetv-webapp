import { Box, Container, Stack } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import ProfileNavBar from "../../others/ProfileNavBar";
import { useLocation, useParams } from "react-router-dom";
import getBottomNavBarItems from "../../../config/BottomNavbarItems";
import ProfileHeader from "../../profile/ProfileHeader";
import GoToTopButton from "../../others/GoToUpButton";

interface Props {
  active: number;
  children: ReactNode;
}

export interface NavBarItem {
  title: string;
  icon: any;
  redirectTo: string;
}

const ProfileHomePageTemplate = ({ children, active }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { lang, userId } = useParams();
  const location = useLocation();
  const menu: NavBarItem[] = getBottomNavBarItems(userId, lang, location.hash);

  return (
    <Stack height="100vh" position="relative">
      <Box flex={0}>
        <ProfileHeader />
      </Box>

      <Container maxW="container.lg" w="100%" flex="1" position={"relative"}>
        {children}
        <GoToTopButton />
      </Container>
      <Box
        position="sticky"
        bottom={0}
        left={0}
        right={0}
        bg="gray.800"
        zIndex={100}
      >
        <ProfileNavBar menu={menu} activeItem={menu[active]} />
      </Box>
    </Stack>
  );
};

export default ProfileHomePageTemplate;
