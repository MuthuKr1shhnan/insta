import {
  Flex,
  Box,
  Text,
  Input,
  HStack,
  Button,
  Group,
} from "@chakra-ui/react";
import React, { useState } from "react";

import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../Contant";

const PostFooter = ({ username, isProfilePage}) => {
  const [liked, setLiked] = useState(true);
  const [likes, setLikes] = useState(1000);
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes + 1);
    } else {
      setLiked(true);
      setLikes(likes - 1);
    }
  };
  return (
    <Box mb={"40px"}>
      <Flex alignItems={"center"} gap={5} w={"full"} pt={0} mt={"2"} mb={"2"}>
        <Box onClick={() => handleLike()} cursor={"pointer"} fontSize={18}>
          {liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />{" "}
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes > 1 ? `${likes} likes` : `${likes} like`}
      </Text>{" "}
      {!isProfilePage && (
        <>
          <Text fontWeight={700} fontSize={"sm"}>
            {username}_{""}{" "}
            <Text as="span" fontWeight={400}>
              Feeling Good!
            </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            View all 1000 Comments
          </Text>
        </>
      )}
      <Flex
        alignItems={"center"}
        mt={0}
        justifyContent={"space-between"}
        w={"full"}
      >
        <HStack width="full" display={"flex"}>
          <Group
            attached
            display={"flex"}
            w={"full"}
            justifyContent={"space-between"}
          >
            <Input
              variant={"flushed"}
              placeholder={"Add a comment..."}
              fontSize={"sm"}
              flex={2}
            />

            <Button
              fontSize={"sm"}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </Group>
        </HStack>
      </Flex>
    </Box>
  );
};

export default PostFooter;
{
  /* <Group attached display={"flex"} w={"full"}>
      <Input placeholder="Add a comment..."  variant={"flushed"} fontSize={14} w={"full"} flex={2}/>
      <InputAddon flex={1}><Button fontSize={14} color={"blue.500"} fontWeight={600} cursor={"pointer"} _hover={{color:"white"} } bg={"transparent"} textAlign={"end"} justifyContent={"end"}>Post</Button></InputAddon>
    </Group> */
}
