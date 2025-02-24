import { Container, VStack, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FeedPost from "./FeedPost";
import { Skeleton, SkeletonCircle } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [2000]);
  }, []);
  return (
    <Container maxW={"xl"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} mb={10} alignItems={"flex-start"}>
            <Flex gap={2} alignItems={"center"} justifyContent={"space-between"} w={"full"}>
              <SkeletonCircle size={10} />
              <VStack alignItems={"flex-start"}>
                <Skeleton h={"10px"} w={"200px"}></Skeleton>
              </VStack>
              <VStack alignItems={"flex-start"}>
                <Skeleton h={"10px"} w={"100px"}></Skeleton>
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>content wrapped!</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost img="/img1.png" username="muthu" avatar="/img1.png" />
          <FeedPost img="/img2.png" username="muthu" avatar="/img2.png" />
          <FeedPost img="/img3.png" username="muthu" avatar="/img3.png" />
          <FeedPost img="/img4.png" username="muthu" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
