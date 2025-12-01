"use client";

import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box transition="0.5s ease-out">
      <Box margin="0">
        <Box as="main" marginY={0} overflowX={"hidden"}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
