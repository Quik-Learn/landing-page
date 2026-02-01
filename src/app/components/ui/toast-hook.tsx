import React, { useEffect, useState } from "react";
import { toaster } from "./toaster";

type ToastStatus = "success" | "error" | "info" | "warning" | "loading";

export const useToastHook = ({
  status,
  title,
  desc,
}: {
  status: ToastStatus;
  title: string;
  desc: string;
}) => {
  // const toast = useToast();
  const [showToast, setShowToast] = useState(false);

  // useEffect(() => {
  //   if (showToast) {
  //     if (status === "success") {
  //       toast({
  //         position: "top-left",
  //         render: () => (
  //           <Box color="white" p={3} bg="green">
  //             {title ? <Heading> {title}</Heading> : null}
  //             {desc ? <Text>{desc}</Text> : null}
  //           </Box>
  //         ),
  //       });
  //     }
  //     if (status === "error") {
  //       toast({
  //         position: "top-left",
  //         render: () => (
  //           <Box color="white" p={3} bg="red">
  //             {title ? <Heading> {title}</Heading> : null}
  //             {desc ? <Text>{desc}</Text> : null}
  //           </Box>
  //         ),
  //       });
  //     }
  //     if (status === "info") {
  //       toast({
  //         position: "top-left",
  //         render: () => (
  //           <Box color="white" p={3} bg="blue">
  //             {title ? <Heading> {title}</Heading> : null}
  //             {desc ? <Text>{desc}</Text> : null}
  //           </Box>
  //         ),
  //       });
  //     }
  //   }
  // }, [desc, showToast, status, title, toast]);

  useEffect(() => {
    if (!showToast) return;

    const payload = { title, description: desc };

    switch (status) {
      case "success":
        toaster.success(payload);
        break;
      case "error":
        toaster.error(payload);
        break;
      case "info":
        toaster.info(payload);
        break;
      case "warning":
        toaster.warning(payload);
        break;
      case "loading":
        toaster.loading(payload);
        break;
    }

    setShowToast(false);
   }, [desc, showToast, status, title]);
  return { setShowToast };
};
