import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import ProfileNavBar from "../../others/ProfileNavBar";
import { useLocation, useParams } from "react-router-dom";
import getBottomNavBarItems from "../../../config/BottomNavbarItems";
import GoToTopButton from "../../others/GoToUpButton";

interface Props {
  active: number;
  children: ReactNode[] | ReactNode;
}

export interface NavBarItem {
  title: string;
  icon: any;
  redirectTo: string;
}

const ProfilePageTemplate = ({ children, active }: Props) => {
  const { lang, userId } = useParams();
  const location = useLocation();
  const menu: NavBarItem[] = getBottomNavBarItems(userId, lang, location.hash);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid
      templateAreas={`"main" "navbar"`}
      templateRows="1fr auto"
      height="100vh"
      margin={0}
    >
      <GridItem area="main">
        <Container maxW="container.lg" centerContent>
          <Box width={"100%"} position={"relative"}>
            {children}
            <GoToTopButton />
          </Box>
        </Container>
      </GridItem>
      <GridItem
        area="navbar"
        position="sticky"
        zIndex={99999}
        bottom={0}
        bg={"gray.800"}
      >
        <ProfileNavBar menu={menu} activeItem={menu[active]} />
      </GridItem>
    </Grid>
  );
};

export default ProfilePageTemplate;
