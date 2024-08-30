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
      >
        <HStack
          w="100%"
          justify="space-between"
          flexDir={{
            base: "column-reverse",
            sm: "column-reverse",
            lg: "row",
          }}
          position="relative"
          spacing={{ base: 6, lg: 10 }}
        >
          {/* <Image
            src="images/arr-1.svg"
            alt="Hero Image"
            position="absolute"
            width={20}
            height={20}
            bottom={2}
            left="40%"
            display={{ base: "none", md: "block" }}
          /> */}
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
            alignItems={{ base: "center", lg: "flex-start" }}
          >
            <Heading
              size="2xl"
              fontWeight="semibold"
              fontFamily="body"
              color="#1D2026"
              textAlign={{ base: "center", lg: "left" }}
              my={5}
            >
              Connect with us
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
            <Button
              text="Copy Email"
              bg="#FF8C00"
              width={169}
              icon={<CiMail color="white" />}
            />
          </VStack>
          <Stack w={{ base: "100%", lg: "50%" }}>
            <Image
              src="images/connect.svg"
              alt="Hero Image"
              width={100}
              height={100}
              alignSelf="center"
              w={{
                base: "100%",
                sm: "100%",
                lg: "90%",
              }}
              h="80%"
            />
          </Stack>
        </HStack>
      </Container>
    </VStack>
  );
};

export default Hero;
