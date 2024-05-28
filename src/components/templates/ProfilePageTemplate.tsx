import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import ProfileNavBar from "../others/ProfileNavBar";
import { BookHalf, ClockHistory, PersonFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";

interface Props {
  active: number;
  children: ReactNode;
}

export interface NavBarItem {
  title: string;
  icon: any;
  redirectTo: string;
}

const ProfilePageTemplate = ({ children, active }: Props) => {
  const { lang, userId } = useParams();
  const menu: NavBarItem[] = [
    {
      title: "History",
      icon: ClockHistory,
      redirectTo: "/" + lang + "/profile/" + userId + "/anime/history",
    },
    {
      title: "Recap",
      icon: BookHalf,
      redirectTo: "/" + lang + "/profile/" + userId + "/recap-series",
    },
    {
      title: "Profile",
      icon: PersonFill,
      redirectTo: "/" + lang + "/profile/" + userId,
    },
  ];

  return (
    <Grid
      templateAreas={`"main" "navbar"`}
      templateRows="1fr auto"
      height="100vh"
      margin={0}
    >
      <GridItem area="main">
        <Container maxW="container.lg" centerContent>
          <Box width={"100%"}>{children}</Box>
        </Container>
      </GridItem>
      <GridItem area="navbar" position="sticky" bottom={0} bg={"gray.800"}>
        <ProfileNavBar menu={menu} activeItem={menu[active]} />
      </GridItem>
    </Grid>
  );
};

export default ProfilePageTemplate;
