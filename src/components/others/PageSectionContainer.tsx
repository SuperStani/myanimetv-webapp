import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import PageHeaderTitle from "./PageHeaderTitle";

interface Props {
  headerTitle?: string | null;
  children: ReactNode;
}
const PageSectionContainer = ({ headerTitle, children }: Props) => {
  return (
    <Stack position={"relative"} width={"100%"}>
      {headerTitle && <PageHeaderTitle text={headerTitle} />}
      {children}
    </Stack>
  );
};

export default PageSectionContainer;
