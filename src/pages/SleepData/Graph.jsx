/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Graph = ({ sleepData }) => {
  class Datapoint {
    constructor(name, score) {
      this.name = name;
      this.score = score;
      this.pv = 2400;
    }
  }

  let dataArray = [];

  sleepData.map((entry) => {
    let time = entry.minutesAsleep + entry.minutesAwake;
    dataArray.push(new Datapoint(entry.dateOfSleep, time));
  });
  return (
    <Box className="checklistChart">
      <LineChart
        width={1000}
        height={600}
        data={dataArray}
        margin={{ right: 40 }}
      >
        <Line
          type="monotone"
          dataKey="score"
          stroke="#e74c3c"
          strokeWidth={4}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="2 8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </Box>
  );
};

export default Graph;
