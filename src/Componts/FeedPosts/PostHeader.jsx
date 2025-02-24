import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import { Avatar } from "@/components/ui/avatar";

const PostHeader = ({avatar, username}) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} gap={5}>
      <Box ><Flex alignItems={"center"} pb={"5px"}>
       
        <Avatar src={avatar} size={"sm"} alt={"Profile Pic"} />
        <Flex fontSize={12} fontWeight={"bold"} p={2} >
          {username} <Box color={"gray.500"} pl={2}>•1w</Box>
        </Flex> </Flex></Box>
        <Box cursor={"pointer"}><Text fontSize={12} color={"blue.400"} fontWeight={"bold"} _hover={{color:"white"}} transition={"all .2s ease"}>Unfollow</Text></Box>
     
    </Flex>
  );
};

export default PostHeader;
