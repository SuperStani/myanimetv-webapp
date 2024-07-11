import { Box, Container, Stack } from "@chakra-ui/react";
import PageSectionContainer from "../../others/PageSectionContainer";
import WeeklySubscriptionsChart from "../../charts/WeeklySubscriptionsChart";
import UsersSlideStats from "../../statistics/UsersSlideStats";
import {
  PieChartFill,
  RocketTakeoffFill,
  Wifi,
  WifiOff,
} from "react-bootstrap-icons";
import { IoFlash } from "react-icons/io5";
import ViewsChart from "../../charts/ViewsChart";

const StatisticsPage = () => {
  return (
    <Container maxW="container.lg" centerContent>
      <Box width={"100%"}>
        {" "}
        <Stack>
          <PageSectionContainer
            headerTitle={{ text: "Total users", icon: PieChartFill }}
          >
            <UsersSlideStats endpoint="/stats/users/total" />
          </PageSectionContainer>
          <PageSectionContainer
            headerTitle={{ text: "Total active users", icon: Wifi }}
          >
            <UsersSlideStats endpoint="/stats/users/active" />
          </PageSectionContainer>
          <PageSectionContainer
            headerTitle={{ text: "Total active users last 24h", icon: IoFlash }}
          >
            <UsersSlideStats endpoint="/stats/users/active/last24" />
          </PageSectionContainer>
          <PageSectionContainer
            headerTitle={{ text: "Total inactive users", icon: WifiOff }}
          >
            <UsersSlideStats endpoint="/stats/users/inactive" />
          </PageSectionContainer>

          <PageSectionContainer
            headerTitle={{
              text: "Subscriptions last 6 months",
              icon: RocketTakeoffFill,
            }}
          >
            <WeeklySubscriptionsChart></WeeklySubscriptionsChart>
          </PageSectionContainer>

          <PageSectionContainer
            headerTitle={{
              text: "Views per hour",
              icon: RocketTakeoffFill,
            }}
          >
            <ViewsChart />
          </PageSectionContainer>
        </Stack>
      </Box>
    </Container>
  );
};

export default StatisticsPage;
