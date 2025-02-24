import { Flex, Box, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { SlLogout } from "react-icons/sl";
import { Avatar } from "@/components/ui/avatar";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a Proggrammer" src="/img1.png" size={"sm"} />
        <Box fontSize={12} fontWeight={"bold"}>
          muthu_
        </Box>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        _focus={{ outline: "none" }}
       
        borderRadius={6}
      >
        <SlLogout size={"16px"} style={{ strokeWidth: 2,}} />
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
