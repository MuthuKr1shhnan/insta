import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleAuth = () => {
    if (!inputs.email || !inputs.password ) {
      alert("Please Fill the all the fields");
      return;
    }
    navigate("/");
  };
 
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src="/logo.png"
            h={24}
            cursor={"pointer"}
            alt="Instagram Logo"
          />
          <Input
            placeholder="Email.."
            fontSize={14}
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder="Password.."
            fontSize={14}
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          {!isLogIn ? (
            <Input
              placeholder="Confirm Password.."
              fontSize={14}
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}
          {/* {...................} */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={4}
            w={"full"}
          >
            <Button
              w={"full"}
              bg="blue"
              color={"white"}
              fontSize={14}
              size={"sm"}
              onClick={() => handleAuth()}
            >
              {isLogIn ? "LogIn" : "Sign Up"}
            </Button>
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" w={5} alt="Google Logo" />
            <Text mx={"2"} color={"blue.500"}>
              Log In With Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogIn
              ? " Do not You have Acccount ?"
              : "Already have an Account?"}
          </Box>
          <Box
            onClick={() => setIsLogIn(!isLogIn)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogIn ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
