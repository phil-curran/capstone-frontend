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
  Box,
  VStack,
} from "@chakra-ui/react";
import "./sleepData.css";
import { TempSpinner } from "../../components/Spinner";
import Graph from "./Graph";

import sleepData from "./short_sleep.json";

const SleepData = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="checklistPanel">
      <Center>
        <Heading as="h2" size="lg">
          Sleep Data
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
                    DateInfo
                  </Heading>
                </Center>
              </Box>
              <Stack marginTop={8} spacing={5} direction="column">
                <p>blah</p>
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
                    <Graph sleepData={sleepData} />
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

export default SleepData;
