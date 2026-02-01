// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { AppToaster } from "./components/ui/toaster";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider value={defaultSystem}>{children}
        <AppToaster/>
      </ChakraProvider>
    </CacheProvider>
  );
}
