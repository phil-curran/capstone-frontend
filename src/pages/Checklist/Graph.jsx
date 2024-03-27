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

const Graph = ({ historicalData }) => {
  return (
    <Box className="checklistChart">
      <LineChart
        width={800}
        height={400}
        data={historicalData}
        margin={{ top: 30, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="score" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="2 8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </Box>
  );
};

export default Graph;
