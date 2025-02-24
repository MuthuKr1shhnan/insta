import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";

const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
      fontWeight={"bold"}
    >
      <Flex
        borderTop={"1px solid white"}
        alignItems={"center"}
        cursor={"pointer"}
        p={3}
        columnGap={2}
      >
        <Box fontSize={20}>
          <BsGrid3X3 />
        </Box>
        <Text display={{ base: "none", md: "block" }} fontSize={12}>
          Posts
        </Text>
      </Flex>
      <Flex alignItems={"center"} cursor={"pointer"} p={3} columnGap={2}>
        <Box fontSize={20}>
          <BsBookmark />
        </Box>
        <Text display={{ base: "none", md: "block" }} fontSize={12}>
          Saved
        </Text>
      </Flex>
      <Flex alignItems={"center"} cursor={"pointer"} p={3} columnGap={2}>
        <Box fontSize={20}>
          <BsSuitHeart fontWeight={'bold'}/>
        </Box>
        <Text display={{ base: "none", md: "block" }} fontSize={12}>
          Liked
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
