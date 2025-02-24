import { VStack, Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Link } from "react-router-dom";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex
        alignItems={"center"}
        w={"full"}
        justifyContent={"space-between"}
        mt={3}
        mb={1}
      >
        <Text fontSize={12} color={"gray.500"} fontWeight={"bold"}>
          Suggestions For You!
        </Text>
        <Text
          fontSize={12}
          color={"blue.500"}
          _hover={{ color: "gray.300" }}
          cursor={"pointer"}
          fontWeight={"bold"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser  name="raju" followers="1000" avatar="/insta/img4.png"/>
      <SuggestedUser name="gopal" followers="1000" avatar="/insta/img4.png" />
      <SuggestedUser name="maya" followers="1000" avatar="/insta/img4.png" />
      <SuggestedUser name="sriman" followers="1000" avatar="/insta/img4.png" />
      <Box
        alignSelf={"start"}
        fontSize={12}
        color={"gray.500"}
        mt={5}
        display={"flex"}
        columnGap={1}
      >
        © 2023 Built By{" "}
        <Link
          to="https://www.youtube.com/@asaprogrammer_"
          target="_blank"
          fontSize={14}
        >
          <Text color="blue.500"> As a Programmer</Text>
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
