import { Box } from "@chakra-ui/layout";
// import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";
import "./styles.css";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
  // console.log(selectedChat);

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      // bg="white"
      width={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
      id="rightchatbox"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
