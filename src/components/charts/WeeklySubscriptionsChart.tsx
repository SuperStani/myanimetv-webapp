import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";
import useDataMany from "../../services/API/AnimeServices/hooks/useDataMany";
import { Box, Skeleton, useMediaQuery } from "@chakra-ui/react";

const WeeklySubscriptionsChart = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const { data, isLoading } = useDataMany<any>(
    "stats/users/subscriptions",
    {},
    [],
    false
  );
  return (
    <Box>
      {isLoading && <Skeleton width={730} height={250}></Skeleton>}
      <ResponsiveContainer width="100%" height={isLargerThan768 ? 400 : 250}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <XAxis dataKey="name" interval={0} angle={-45} />
          <YAxis
            domain={[0, Math.max(...data.map((entry) => entry.users)) + 50]}
            tickCount={10}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#8884d8"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default WeeklySubscriptionsChart;
