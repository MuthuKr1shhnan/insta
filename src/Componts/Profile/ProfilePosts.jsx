import { Box, Grid, VStack } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [2000]);
  }, []);
  return (
    <div>
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={1}
      >
        {isLoading &&
          [0, 1, 2, 3, 4, 5].map((_, idx) => (
            <VStack key={idx} alignItems={"flex-start"} gap={4}>
              <Skeleton w={"full"}>
                <Box h={"300px"}></Box>
              </Skeleton>
            </VStack>
          ))}
        {!isLoading && (
          <>
            <ProfilePost img = '/insta/img1.png'/>
            <ProfilePost img = '/insta/img2.png'/>
            <ProfilePost img = '/insta/img3.png'/>
            <ProfilePost img = '/insta/img4.png'/>
          </>
        )}
      </Grid>
    </div>
  );
};

export default ProfilePosts;
