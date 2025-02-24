import React, { useEffect, useState } from "react";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";

const FeedPost = ({ img, username, avatar }) => {
  return (
    <>
      <PostHeader avatar={avatar} username={username} />
      <Box
        borderRadius={4}
        overflow={"hidden"}
        height={"500px"}
        display={"flex"}
        alignItems={"center"}
      
        position={"relative"}
      >
        <Image src={img} alt="User Profile Pic" objectFit={"cover"} position={"absolute"}  h={"full"}  filter="blur(20px)" opacity={.1}/>
        <Image src={img} alt="User Profile Pic" objectFit={"cover"} w={'full'}
        h={'full'} position={"absolute"} zIndex={1}/>
      </Box>
      <PostFooter username={username} />
    </>
  );
};

export default FeedPost;
