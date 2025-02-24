import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";

const Comment = ({ createdAt, username, profilePic, text }) => {
  return (
    <Flex gap={4}>
      <Avatar src={profilePic} name={username} size={"sm"} />
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Flex alignContent={"flex-start"} flexDirection={"column"}>
            {" "}
            <Text
              fontWeight={"bold"}
              fontSize={12}
              justifyContent={"flex-start"}
            >
              {username}
            </Text>
            <Text
              fontSize={12}
              display={"inline"}
              color={"gray"}
              alignSelf={"flex-start"}
              justifyItems={"flex-start"}
            >
              {createdAt}
            </Text>
          </Flex>

          <Text fontSize={14} display={"inline"}>
            {text}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Comment;
