import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { NavBarItem } from "../templates/ProfilePageTemplate";
import { Link } from "react-router-dom";

interface Props {
  menu: NavBarItem[];
  activeItem: NavBarItem;
}

const ProfileNavBar = ({ menu, activeItem }: Props) => {
  return (
    <HStack width={"100%"}>
      {menu.map((item, index) => (
        <Box width={"100%"} key={index}>
          <Link to={item.redirectTo}>
            <VStack
              align={"center"}
              color={activeItem.title === item.title ? "white.500" : "gray.500"}
              justify={"center"}
              spacing={0}
              paddingY={2}
            >
              <Icon boxSize={7} as={item.icon}></Icon>
              <Text fontSize={"12px"} align={"center"}>
                {item.title}
              </Text>
            </VStack>
          </Link>
        </Box>
      ))}
    </HStack>
  );
};

export default ProfileNavBar;
