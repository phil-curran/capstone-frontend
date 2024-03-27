/* eslint-disable react/prop-types */
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
  Spinner,
  Flex,
} from "@chakra-ui/react";
import Graph from "./Graph";
import { createChecklist, fetchChecklist, updateChecklist } from "./apiHooks";
import { TempSpinner } from "../../components/Spinner";
import "./checklist.css";
import { useAuthContext } from "../../hooks/useAuthContext";

const Checklist = () => {
  const [checklist, setChecklist] = useState(null);
  const [today, setToday] = useState(null);
  const [dateInfo, setDateInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [historicalData, setHistoricalData] = useState(null);
  const { user } = useAuthContext();
  console.log("user: ", user);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchChecklist();
        setChecklist(data.checklist);
        setHistoricalData(data.graphData);
        setDateInfo(data.checklist.formattedDateString);
        setToday(data.todayData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching checklist:", error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async (updatedChecklist) => {
    try {
      console.log("updatedChecklist: ", updatedChecklist);
      await updateChecklist(updatedChecklist);
      const updatedData = await fetchChecklist(); // Fetch updated data after update
      setChecklist(updatedData);
    } catch (error) {
      console.error("Error updating checklist:", error.message);
    }
  };

  const renderTodayChecklist = () => {
    if (!today) return null;
    return today.map((item) =>
      Object.entries(item).map(([key, value]) => {
        if (key.startsWith("task")) {
          return (
            <Checkbox
              // onChange={handleUpdate}
              {...(value > 0 ? { isChecked: true } : {})}
              key={key}
            >
              {key}
            </Checkbox>
          );
        }
        return null;
      })
    );
  };

  return (
    <div className="checklistPanel">
      <Center>
        <Heading as="h2" size="lg">
          Checklist
        </Heading>
      </Center>
      {isLoading ? (
        <TempSpinner />
      ) : (
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
                    {dateInfo && dateInfo}
                  </Heading>
                </Center>
              </Box>
              <Stack marginTop={8} spacing={5} direction="column">
                {renderTodayChecklist()}
              </Stack>
            </TabPanel>
            <TabPanel>
              <Center>
                <VStack>
                  <Box>
                    <Heading as="h3" size="md">
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
      )}
    </div>
  );
};

export default Checklist;
