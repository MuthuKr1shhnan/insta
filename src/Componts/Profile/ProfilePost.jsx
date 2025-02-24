import { Flex, GridItem, Text, Image, Box, Separator, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment, FaRegTrashAlt } from "react-icons/fa";
import { Avatar } from "@/components/ui/avatar";
import Comment from "../Comment/Comment";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
 
  DialogRoot,
} from "@/components/ui/dialog";
import { MdDelete } from "react-icons/md";
import PostFooter from "../FeedPosts/PostFooter";

const ProfilePost = ({ img }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={() => setOpen(true)} // Open modal when clicking the image
      >
        <Flex
          w={"full"}
          h={"full"}
          opacity={0}
          _hover={{ opacity: 1 }}
          bg={"blackAlpha.700"}
          transition={"all .3s ease"}
          position={"absolute"}
          zIndex={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt="profile pic"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      <DialogRoot
        lazyMount
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        size={{ base: "sm", md: "xl" }}
        height='500px'
        placement={"center"}
        bg={'black'}
      >
        <DialogContent>
          <DialogBody bg={"black"} pb={5} mt={10} >
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full", mx: "auto" }}
            >
              <Box
                borderRadius={4}
                overflow="hidden"
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1}
              >
                <Image src={img} alt="profile post" h={"500px"} w={'500px'}/>
              </Box>
              <Flex
                flex={1}
                flexDir={"column"}
                px={2}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src="/insta/profilepic.png"
                      size={"sm"}
                      name="As a Programmer"
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      asaprogrammer_
                    </Text>
                  </Flex>
                  <Box _hover={{ bg: "transperant", color: "red.600" }}>
                    <FaRegTrashAlt size={18} cursor={"pointer"}  />
                  </Box>
                </Flex>
                <Separator size={"md"} variant={"solid"} />
                <VStack
                  w="full"
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                  my={4}
                >
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer_"
                    profilePic="/insta/profilepic.png"
                    text={"Dummy images from unsplash"}
                  />
                  <Comment
                    createdAt={"12h ago"}
                    username={"abrahmov"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"Nice pic"}
                  />
                  <Comment
                    createdAt={"3h ago"}
                    username={"kentcdodds"}
                    profilePic={"https://bit.ly/kent-c-dodds"}
                    text={"Good clone dude!"}
                  />
                </VStack>
                <Separator variant={"solid"} mt={'auto'}/>
                <PostFooter isProfilePage={true}/>
              </Flex>
            </Flex>
          </DialogBody>

          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default ProfilePost;
