import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function CommentsPageTemplate({ children }: { children: ReactNode }) {
	return (
		<Container
			maxW="container.lg"
			centerContent>
			<Box width={"100%"}>{children}</Box>
		</Container>
	);
}
