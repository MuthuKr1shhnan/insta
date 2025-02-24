
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../../Componts/SideBar/Sidebar";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const  pathName  = useLocation();
 
  return (
    <>
      <Flex>
        {/* sidebar on the left */}
        { pathName.pathname !== "/auth" ? (
          <Box w={{base:"70px" ,md:"240px"}} >
            <Sidebar />
          </Box>
        ) : null}

        {/* content on the right */}
        <Box
          flex={1}
          w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default PageLayout;
