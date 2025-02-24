import { Box, Button, Flex, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Avatar} from '@/components/ui/avatar'


const SuggestedUser = ({name, followers, avatar}) => {
    const [isFollow, setIsFollow] = useState(true)
  return (
    <Flex justifyContent={'space-between'} alignItems={"center"} w={"full"}>
    <Flex alignItems={"center"} >
        <Avatar src={avatar} name={name} size={"md"}  />
        <VStack  alignSelf={"start"} pl={2}>
            <Box fontSize={12} fontWeight={'bold'} alignSelf={"start"}>{name}</Box>
            <Box fontSize={11} color={"gray.500"} alignSelf={"start"}>{followers} followers</Box>
        </VStack>
    </Flex>
    <Button fontSize={12} p={0} color={'blue.500'} bg={'transparent'} _hover={{color:"whiteAlpha.500"}} onClick={()=> setIsFollow(!isFollow)} alignSelf={"start"}>{isFollow?("UnFollow"):("Follow")}</Button>

    </Flex>
  )
}

export default SuggestedUser