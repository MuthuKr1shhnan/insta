import { Flex, VStack, Text, Button} from "@chakra-ui/react";
import React from "react";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size= "2xl" 
        justifySelf={"center"}
        alignContent="flex-start"
        mx={"auto"}
        variant={"solid"}
        
      >
        <Avatar
          src="/insta/profilepic.png"
          name="As a Proggrammer"
          alt="profile pic"
        />
      </AvatarGroup>
      <VStack alignItems={"center"} gap={2} mx={"auto"} flex={1} >
        <Flex gap={4} direction={{base:'column', sm:'row'}} justifyContent={{base:'center', sm:'flex-start'}} alignItems={"center"} w={"full"}>
          <Text fontSize={{base:'sm', md:'lg'}}> muthu_</Text>
          <Flex>
            <Button bg={"white"} color={"black"} _hover={{bg:"whiteAlpha.800"}} size={{base:'xs',md:'ssm' }}> Edit Profile</Button>
          </Flex>
        </Flex>
        <Flex w={"full"} alignItems={"center"}  gap={{base:2, sm:4}}>
          <Text>
            <Text fontSize={{base:'xm', md:'sm'}} as={"span"} fontWeight={"bold"} mr={1} >4</Text> Posts
          </Text>
          <Text>
            <Text fontSize={{base:'xm', md:'sm'}} as={"span"} fontWeight={"bold"} mr={1} >149</Text> Followers
          </Text>
          <Text>
            <Text fontSize={{base:'xm', md:'sm'}} as={"span"} fontWeight={"bold"} mr={1} >175</Text> Followings
          </Text>
        </Flex>
        <Flex w={"full"} alignItems={"center"} gap={4} ><Text fontSize={"sm"} fontWeight={"bold"} >As a Proggrammer</Text></Flex>
        <Text fontSize={"sm"}w={"full"}  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam.</Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
