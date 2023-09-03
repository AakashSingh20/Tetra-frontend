import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Login } from "../Components/Authentication/Login";
import { Signup } from "../Components/Authentication/Signup";
import Coming from "./Coming";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  // const navigate = useNavigate();

  return (
    <Container maxW="xl" centerContent>
      <Box
        p={3}
        // bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Box borderWidth="1px">
          <Flex alignItems="center">
            <Spacer />
            <Text fontSize="4xl" fontFamily="Work sans">
              X
            </Text>
            <Spacer />
          </Flex>
        </Box>
      </Box>
      <Box w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              {/* <Signup /> */}
              <Coming />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
