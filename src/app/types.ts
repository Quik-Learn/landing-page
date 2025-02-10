import { ReactElement } from "react";

export type ButtonType = {
  text: string;
  icon?: any;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  alignSelf?: "center" | "flex-start" | "flex-end";
  borderColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  fontSize?: number;
  fontWeight?: number;
  px?: number;
  py?: number;
  color?: string;
  bg?: string;
  bgHover?: string;
  textHover?: string;
  border?: string;
  borderHover?: string;
  bgDisabled?: string;
  textDisabled?: string;
  borderDisabled?: string;
  type?: "button" | "submit" | "reset";
  borderRadius?: number;
  width?: string | number | {};
  bgGradient?: string;
  fontFamily?: string;
};
export type FeatureProps = {
  title: string;
  id: string;
  image: string;
  color: string;
  bg: string;
  desc: string;
  router: any;
};
export type PricingTier = {
  title: string;
  price: string;
  period: string;
  features: { feature: string; available: boolean }[];
  isPopular?: boolean;
  buttonVariant?: "solid" | "outline";
  buttonColorScheme?: string;
  bgColor?: string;
  textColor?: string;
  buttonText?: string;
};
export type PriceWrapperProps = {
  children: React.ReactNode;
  bgColor?: string;
  //   borderColor: string;
};
