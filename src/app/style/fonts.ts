import type { DeepPartial, Theme } from "@chakra-ui/react";
import localFont from "next/font/local";

const BeVietnamPro = localFont({
  src: [
    {
      path: "../../assets/fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Be_Vietnam_Pro/BeVietnamPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});
const Inter = localFont({
  src: [
    {
      path: "../../assets/fonts/Inter/Inter-ExtraThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Inter/Inter-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Inter/Inter-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Inter/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Inter/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Inter/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Inter/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Be_Vietnam_Pro/Inter-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const fonts: DeepPartial<Theme["fonts"]> = {
  heading: BeVietnamPro.style.fontFamily,
  body: Inter.style.fontFamily,
};
