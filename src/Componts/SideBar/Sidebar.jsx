import React, { useState } from "react";
import { Flex, Box, Link, useBreakpointValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../Contant";
import { HiOutlineHome } from "react-icons/hi2";
import { Tooltip } from "@/components/ui/tooltip";
import { Avatar } from "@/components/ui/avatar";
import { SlLogout } from "react-icons/sl";

const Sidebar = () => {
  const [sidebarItems] = useState([
    {
      icon: <HiOutlineHome size={25} style={{ strokeWidth: 2 }} />,
      text: "Home",
      link: "/insta",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"xs"} />,
      text: "Profile",
      link: "/insta/asaprogrammer",
    },
  ]);

  const showTooltip = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      height="100vh"
      borderRight="1px solid"
      borderColor="whiteAlpha.300"
      py={8}
      position="sticky"
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
      bg="black"
    >
      <Flex direction="column" gap={10} w="full" h="full">
        {/* Instagram Logo */}
        <Link
          to="/insta"
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          _focus={{ outline: "none" }}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>
        <Link
          to="/insta"
          as={RouterLink}
          justifyContent="center"
          alignItems="center"
          p={2}
          display={{ base: "flex", md: "none" }}
          cursor="pointer"
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={"full"}
        >
          <InstagramMobileLogo />
        </Link>

        {/* Sidebar Items */}
        <Flex direction="column" gap={5}>
          {sidebarItems.map((item, index) => (
            <Box key={index}>
              {showTooltip ? (
                <Tooltip
                  key={index}
                  showArrow
                  positioning={{ placement: "right" }}
                  content={item.text}
                  openDelay={500}
                >
                  <Link
                    to={item.link || null}
                    as={RouterLink}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    _hover={{ bg: "whiteAlpha.500" }}
                    borderRadius={6}
                    p={2}
                    variant="plain"
                  >
                    {item.icon}
                  </Link>
                </Tooltip>
              ) : (
                <Link
                  to={item.link || null}
                  as={RouterLink}
                  display={{ base: "flex", md: "inline-flex" }}
                  alignItems="center"
                  justifyContent="center"
                  gap={4}
                  _hover={{ bg: "whiteAlpha.500", textDecoration: "none" }}
                  borderRadius={6}
                  p={2}
                  variant={"plain"}
                >
                  {item.icon}
                  <Box
                    fontSize="1rem"
                    display={{ base: "none", md: "block" }}
                    color="white"
                  >
                    {item.text}
                  </Box>
                </Link>
              )}
            </Box>
          ))}
          {showTooltip ? (
            <Tooltip
              
              showArrow
              positioning={{ placement: "right" }}
              content={"Log Out"}
              openDelay={500}
            >
              <Link
                to={"/insta/auth"}
                as={RouterLink}
                display="flex"
                justifyContent="center"
                alignItems="center"
                _hover={{ bg: "whiteAlpha.500" }}
                borderRadius={6}
                p={2}
                variant="plain"
              >
                <SlLogout size={25} style={{ strokeWidth: 2 }} />
              </Link>
            </Tooltip>
          ) : (
            <Link
              to={"/insta/auth"}
              as={RouterLink}
              display={{ base: "flex", md: "inline-flex" }}
              alignItems="center"
              justifyContent="start"
              gap={4}
              _hover={{ bg: "whiteAlpha.500", textDecoration: "none" }}
              borderRadius={6}
              p={2}
              variant={"plain"}
              mt={320}
            >
              <SlLogout size={25} style={{ strokeWidth: 2 }} />
              <Box
                fontSize="1rem"
                display={{ base: "none", md: "block" }}
                color="white"
              >
                Log Out
              </Box>
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;

// import React, { useState } from "react";
// import { Flex, Box, Link } from "@chakra-ui/react";
// import { Link as RouterLink } from "react-router-dom";
// import {
//   CreatePostLogo,
//   InstagramLogo,
//   InstagramMobileLogo,
//   NotificationsLogo,
//   SearchLogo,
// } from "../../assets/Contant";
// import { AiFillHome } from "react-icons/ai";
// import { Tooltip } from "@/components/ui/tooltip";
// import { Avatar } from "@/components/ui/avatar";

// const Sidebar = () => {
//   const [sidebarItems, setSideBarItems] = useState([
//     {
//       icon: <AiFillHome size={25} />,
//       text: "Home",
//       link: "/",
//     },
//     {
//       icon: <SearchLogo />,
//       text: "Search",
//     },
//     {
//       icon: <NotificationsLogo />,
//       text: "Notifications",
//     },
//     {
//       icon: <CreatePostLogo />,
//       text: "Create",
//     },
//     {
//       icon: <Avatar w={25} h={25} />,
//       text: "Profile",
//     },
//   ]);
//   return (
//     <>
//       <Box
//         height={"100vh"}
//         borderRight={"1px solid"}
//         borderColor={"whiteAlpha.300"}
//         py={8}
//         position={"sticky"}
//         top={0}
//         left={0}
//         px={{ base: 2, md: 4 }}
//       >
//         <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
//           <Link
//             to={"/"}
//             as={RouterLink}
//             pl={2}
//             display={{ base: "none", md: "block" }}
//             cursor={"pointer"}
//           >
//             <InstagramLogo />
//           </Link>
//           <Link
//             to={"/"}
//             as={RouterLink}
//             pl={2}
//             display={{ base: "block", md: "none" }}
//             cursor={"pointer"}
//             borderRadius={6}
//             _hover={{ bg: "whiteAlpha.200" }}
//             w={10}
//           >
//             <InstagramMobileLogo />
//           </Link>
//           <Flex direction={"column"} gap={5} cursor={"pointer"}>
//             {sidebarItems.map((item, index) => (
//               <Tooltip
//                 key={index}
//                 showArrow
//                 content={item.text}
//                 placement="right"
//                 ml={1}
//                 openDelay={500}
//                 display={{ base: "block", md: "none" }}
//               >
//                 <Link
//                   display={"flex"}
//                   as={RouterLink}
//                   alignItems={"center"}
//                   gap={4}
//                   _hover={{ bg: "whiteAlpha.500" }}
//                   borderRadius={6}
//                   p={2}
//                   w={10}
//                 >
//                   <Flex
//                     display={{ base: "block", md: "bloc" }}
//                     justifyContent={"center"}
//                   >
//                     {item.icon}
//                   </Flex>
//                   <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
//                 </Link>
//               </Tooltip>
//             ))}
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   );
// };

// export default Sidebar;
// import React, { useState } from "react";
// import { Flex, Box, Link, Avatar, } from "@chakra-ui/react";
// import { Link as RouterLink } from "react-router-dom";
// import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../assets/Contant";
// import { AiFillHome } from "react-icons/ai";
//import { Tooltip } from "@/components/ui/tooltip"

// const Sidebar = () => {
//   const [sidebarItems, setSideBarItems] = useState([{
//     icon: <AiFillHome/>,
//     text: "Home",
//     link:"/",
//   },{
//     icon: <SearchLogo/>,
//     text: "Search",

//   },{
//     icon: <NotificationsLogo/>,
//     text: "Notifications",
//     link:"/",
//   },{
//     icon: <CreatePostLogo/>,
//     text: "Create",

//   },{
//     icon: <Avatar  size={"sm"} name="Burak" src="/profilepic.png"/>,
//     text: "Profile",
//     link:"/asaprogrammer",
//   }])
//   return (
//     <>
//       <Box
//         height={"100vh"}
//         borderRight={"1px solid"}
//         borderColor={"whiteAlpha.300"}
//         py={8}
//         position={"sticky"}
//         top={0}
//         left={0}
//         px={{ base: 2, md: 4 }}
//       >
//         <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
//           <Link
//             to={"/"}
//             as={RouterLink}
//             pl={2}
//             display={{ base: "none", md: "block" }}
//             cursor={"pointer"}
//           >
//         <InstagramLogo/>
//           </Link>
//           <Link
//             to={"/"}
//             as={RouterLink}
//             pl={2}
//             display={{ base: "block", md: "none" }}
//             cursor={"pointer"}
//             borderRadius={6}
//             _hover={{ bg: "whiteAlpha.200" }}
//             w={10}
//           >
//             <InstagramMobileLogo />
//           </Link>
//           <Flex direction={"column"} gap={5} cursor={"pointer"} >
//             {sidebarItems.map((item, index)=>(<Tooltip key={index}  hasArrow label={item.text} placement="right" ml={1} openDelay={500} display={{base:"block", md:"none"}} ><Link display={"flex"} as={RouterLink} alignItems={"center"} gap={4} _hover={{bg:"whiteAlpha.500"}  } borderRadius={6} p={2} w={10}>{item.icon}<Box display={{base:"none", md:"block"}}>{item.text}</Box></Link></Tooltip>))}
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   );
// };

// export default Sidebar;
