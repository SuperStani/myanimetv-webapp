import { Box, HStack, Icon, Spacer, Stack, Text } from "@chakra-ui/react";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

export interface HeaderTitleProps {
  text: string;
  icon?: any | null;
  redirectTo?: string | null;
  iconRedirectTo?: any | null;
  stickyHeader?: boolean;
}

const PageHeaderTitle = ({
  text,
  icon = null,
  redirectTo = null,
  stickyHeader = true,
  iconRedirectTo = null,
}: HeaderTitleProps) => {
  return (
    <Stack
      position={stickyHeader ? "sticky" : "relative"}
      top={-0.5}
      zIndex="99999"
      spacing={2}
      bg={"gray.800"}
      paddingTop={2}
    >
      <HStack>
        {icon && <Icon boxSize={5} as={icon}></Icon>}
        <Text
          casing={{ base: "uppercase" }}
          fontFamily={"Mochiy Pop One"}
          align={"left"}
          fontSize={{ base: "13px", md: "20px", lg: "20px" }}
        >
          {text}
        </Text>
        <Spacer />
        {redirectTo && (
          <Link to={redirectTo}>
            <Icon boxSize={4} as={iconRedirectTo ?? MdArrowForwardIos} />
          </Link>
        )}
      </HStack>
      <Box
        width="100%"
        height={["3px", "5px", "7px"]}
        bgGradient="linear(to-l, #213944, #2a4cbd)"
      />
    </Stack>
  );
};

export default PageHeaderTitle;
