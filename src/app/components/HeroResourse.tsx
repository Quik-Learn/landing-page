"use client";

import {
  VStack,
  Container,
  HStack,
  Heading,
  Text,
  InputGroup,
  Input,
  InputRightAddon,
  Stack,
  Link as ChakraLink,
  IconButton,
} from "@chakra-ui/react";

import { Image } from "@chakra-ui/next-js";
import { CiMail } from "react-icons/ci";
import Button from "./ui/button";
const buttons = [
  { id: 1, name: "All", bg: "#0A52A8" },
  { id: 2, name: "Education", bg: "#FF8C00" },
  { id: 3, name: "Viewpoint", bg: "#027300" },
  { id: 4, name: "News", bg: "#0065FF" },
];
const Hero = () => {
  return (
    <VStack
      h={{
        xl: "auto",
        lg: "100vh",
        md: "100vh",
        sm: "100vh",
      }}
      // mt={{
      //   base: 150,
      //   sm: 130,
      //   md: 120,
      //   lg: 110,
      // }}
      position="relative"
      fontFamily="heading"
      paddingX={{ base: 5, md: 10, lg: 20 }}
      paddingY={{ base: 5, md: 10, lg: 10 }}
    >
      <Container
        maxW={{
          base: "100%",
          md: "100%",
          lg: "1440px",
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src="images/Sparkle.svg"
          alt="Hero Image"
          position="absolute"
          width={7}
          height={7}
          top={2}
          left="20%"
          display={{ base: "none", md: "block" }}
        />
        <VStack
          spacing={3}
          w={{ base: "100%", lg: "50%" }}
          alignItems={{ base: "center", lg: "center" }}
        >
          <Heading
            size="2xl"
            fontWeight="semibold"
            fontFamily="body"
            color="#1D2026"
            textAlign={{ base: "center", lg: "left" }}
            my={5}
          >
            Resources
          </Heading>
          <Text
            color="#4E5566"
            fontSize={{
              base: "20px",
              lg: "24px",
            }}
            marginBottom={{ base: 10, lg: 4 }}
            fontFamily="body"
            textAlign={{ base: "center", lg: "left" }}
          >
            Want to chat? We’d love to hear from you! Get in touch with our
            Customer Success Team to inquire about
          </Text>
          <Stack direction={"row"} width="100%" height="48px" marginBottom={20}>
            <Input
              placeholder={"Enter your Email to Subscribe to our Newsletter..."}
              bg="white"
              borderWidth={1}
              borderColor="#DCDCE5"
              _focus={{
                bg: "whiteAlpha.300",
              }}
              height="100%"
            />
            <Button bg="#FF8C00" color="white" text="Subscribe" width={130} />
          </Stack>
          <HStack align={"center"} justify={"center"} gap={20}>
            {buttons?.map((item) => (
              <Button key={item.id} text={item.name} bg={item.bg} />
            ))}
          </HStack>
        </VStack>
      </Container>
    </VStack>
  );
};

export default Hero;
