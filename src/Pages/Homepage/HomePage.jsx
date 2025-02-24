import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import FeedPosts from "../../Componts/FeedPosts/FeedPosts";
import SuggestedUsers from "../../Componts/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <Container maxW={"4xl"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          mr={15}
          maxW={"300px"}
          display={{ base: "none", md: "block" }}
          py={10}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
