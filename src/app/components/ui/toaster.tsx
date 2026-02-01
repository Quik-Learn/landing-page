"use client";

import {
  Toaster,
  createToaster,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastCloseTrigger,
  ToastIndicator,
  Stack,
} from "@chakra-ui/react";

export const toaster = createToaster({ placement: "top-start" });

export function AppToaster() {
  return (
    <Toaster toaster={toaster} gap={3}>
      {(t) => (
        <ToastRoot>
          <ToastIndicator />
          <Stack gap="1" flex="1">
            {t.title ? <ToastTitle>{t.title}</ToastTitle> : null}
            {t.description ? (
              <ToastDescription>{t.description}</ToastDescription>
            ) : null}
          </Stack>
          <ToastCloseTrigger />
        </ToastRoot>
      )}
    </Toaster>
  );
}