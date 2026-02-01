import { ButtonType } from "@/app/types";
import { Button as ChakraButton, Box } from "@chakra-ui/react";

const Button = (props: ButtonType) => {
  const {
    text: textProp,
    icon,
    iconPosition = "left",
    size = "lg",
    variant = "solid",
    isDisabled,
    isLoading,
    onClick,
    fontSize = "16px",
    fontWeight = 700,
    borderColor,
    color: text = variant === "solid" ? "white" : "#0065FF",
    bg = variant === "solid" ? "#0065FF" : "white",
    border = "#C6C6C6",
    type = "button",
    borderRadius = "4px",
    width = "100%",
    px,
    py,
    bgGradient,
    fontFamily = "body",
    alignSelf,
  } = props;

  return (
    <ChakraButton
      size={size}
      variant={variant}
      disabled={isDisabled}
      loading={isLoading}
      onClick={onClick}
      color={text}
      alignSelf={alignSelf}
      bg={bg}
      bgGradient={bgGradient}
      borderWidth={variant === "outline" ? "1px" : "0px"}
      borderColor={border}
      borderRadius={borderRadius}
      _hover={{
        transform: "scale(1.05)",
        transition: "all 0.2s ease-in-out",
      }}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      type={type}
      width={width}
      px={px}
      py={py}
    >
      {icon && iconPosition === "left" ? (
        <Box as="span" display="inline-flex" alignItems="center" mr={2}>
          {icon}
        </Box>
      ) : null}

      {textProp}

      {icon && iconPosition === "right" ? (
        <Box as="span" display="inline-flex" alignItems="center" ml={2}>
          {icon}
        </Box>
      ) : null}
    </ChakraButton>
  );
};

export default Button;
