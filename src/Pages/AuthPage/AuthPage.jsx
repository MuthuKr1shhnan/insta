import { Flex, Container, Box, Image, VStack } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../../Componts/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center" px={4}>
      <Container maxW="container.md" p={0}>
        <Flex align="center" justify="center" w="100%" gap={8}>
          {/* Left Side Box (Only for larger screens) */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/insta/auth.png" h={650} alt="Phone Img" />
          </Box>

          {/* Right Side Box */}
          <VStack spacing={4} align="stretch" justify="center">
            {/* Add your form or content here */}
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/insta/playstore.png" h={10} alt="Playstore Image" />
              <Image src="/insta/microsoft.png" h={10} alt="Microsoft Image" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
