import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import PageHeaderTitle, { HeaderTitleProps } from "./PageHeaderTitle";

interface Props {
  headerTitle?: HeaderTitleProps;
  children: ReactNode;
}

const PageSectionContainer = ({ headerTitle, children }: Props) => {
  return (
    <Stack position={"relative"}>
      {headerTitle && <PageHeaderTitle {...headerTitle} />}
      {children}
    </Stack>
  );
};

export default PageSectionContainer;
