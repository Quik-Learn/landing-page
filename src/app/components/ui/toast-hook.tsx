import { Box, Heading, useToast, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const useToastHook = ({
  status,
  title,
  desc,
}: {
  status: string;
  title: string;
  desc: string;
}) => {
  const toast = useToast();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      if (status === "success") {
        toast({
          position: "top-left",
          render: () => (
            <Box color="white" p={3} bg="green">
              {title ? <Heading> {title}</Heading> : null}
              {desc ? <Text>{desc}</Text> : null}
            </Box>
          ),
        });
      }
      if (status === "error") {
        toast({
          position: "top-left",
          render: () => (
            <Box color="white" p={3} bg="red">
              {title ? <Heading> {title}</Heading> : null}
              {desc ? <Text>{desc}</Text> : null}
            </Box>
          ),
        });
      }
      if (status === "info") {
        toast({
          position: "top-left",
          render: () => (
            <Box color="white" p={3} bg="blue">
              {title ? <Heading> {title}</Heading> : null}
              {desc ? <Text>{desc}</Text> : null}
            </Box>
          ),
        });
      }
    }
  }, [desc, showToast, status, title, toast]);

  return { setShowToast };
};
