/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import getTodayFormattedDate from "../../utilities/getTodayFormattedDate";
import {
  Heading,
  Center,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Stack,
  Checkbox,
  Box,
  VStack,
} from "@chakra-ui/react";
import Graph from "./Graph";

import "./checklist.css";
import { get } from "mongoose";

const Checklist = () => {
  const [checklist, setChecklist] = useState(null);
  const [today, setToday] = useState(null);
  const [dateInfo, setDateInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [historicalData, setHistoricalData] = useState(null);

  const getChecklistData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/checklists", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAxZTBmMzlhMmQ2MTI2OWY0ZjY1YjQiLCJpYXQiOjE3MTE0MDIyMTYsImV4cCI6MTcxMTY2MTQxNn0.52_YiiE1ho6e3athdQBLexPOT0_y1Yfu3Mc15W87XJY",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch checklist");
      }

      const json = await response.json();
      // sets the checklist state to the fetched data
      setChecklist(json);

      // gets entryDateString and formattedDateString for today
      let now = getTodayFormattedDate();
      // let now = "19MAR2024";

      // sets dateInfo state to the now date object
      setDateInfo(now);

      // filters json response for today's date based on entryDateString
      let todayData = json.filter(
        (item) => item.entryDateString === now.entryDateString
      );

      // sets today state to the filtered data as an array, even if it contains only one item
      setToday(todayData);

      // instantiate empty array for graph data
      let graphData = [];

      class Datapoint {
        constructor(name, score) {
          this.name = name;
          this.score = score;
          this.pv = 10;
        }
      }

      const sumTaskValues = (obj) => {
        let sum = 0;
        for (let key in obj) {
          // Check if the property represents a task (starts with "task")
          if (key.startsWith("task")) {
            // Add the value of the task to the sum
            sum += obj[key];
          }
        }
        return sum;
      };

      // loop through the json response
      for (const obj of json) {
        const sum = Object.entries(obj)
          .filter(([key]) => key.startsWith("task"))
          .reduce((acc, [key, value]) => acc + value, 0);

        const dataPoint = new Datapoint(obj.entryDateString, sum);
        graphData.push(dataPoint);
      }

      setHistoricalData(graphData);

      // sets isLoading to false
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching checklist:", error.message);
    }
  };

  const updateData = async (updatedChecklist) => {
    try {
      const response = await fetch("http://localhost:3000/api/checklists", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAxZTBmMzlhMmQ2MTI2OWY0ZjY1YjQiLCJpYXQiOjE3MTE0MDIyMTYsImV4cCI6MTcxMTY2MTQxNn0.52_YiiE1ho6e3athdQBLexPOT0_y1Yfu3Mc15W87XJY",
        },
        body: JSON.stringify(updatedChecklist), // Pass the updated checklist data
      });

      if (!response.ok) {
        throw new Error("Failed to update checklist");
      }

      // If the update was successful, you might want to fetch the updated checklist data again
      getChecklistData();
    } catch (error) {
      console.error("Error updating checklist:", error.message);
    }
  };

  useEffect(() => {
    getChecklistData();
  }, []);

  return (
    <div className="checklistPanel">
      <Center>
        <Heading as="h2" size="xl">
          Checklist
        </Heading>
      </Center>
      <Tabs isFitted>
        <TabList mb="1em">
          <Tab>Today</Tab>
          <Tab>Overview</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box>
              <Center>
                <Heading as="h3" size="md">
                  {dateInfo && dateInfo.formattedDateString}
                </Heading>
              </Center>
            </Box>
            <Stack marginTop={8} spacing={5} direction="column">
              {today &&
                today.map((item) =>
                  Object.entries(item).map(([key, value]) => {
                    // Exclude _id and keys that don't start with "task" from being displayed
                    if (key !== "_id" && key.startsWith("task")) {
                      return (
                        <Checkbox
                          {...(value > 0 ? { isChecked: true } : {})}
                          key={key}
                        >
                          {key}
                        </Checkbox>
                      );
                    }
                    return null;
                  })
                )}
            </Stack>
          </TabPanel>
          <TabPanel>
            <Center>
              <VStack>
                <Box>
                  <Heading as="h3" size="lg">
                    Timeline
                  </Heading>
                </Box>
                <Box>
                  <Graph historicalData={historicalData} />
                </Box>
              </VStack>
            </Center>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Checklist;
