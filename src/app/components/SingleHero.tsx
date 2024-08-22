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
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "./ui/button";

const SingleHero = () => {
  return (
    <VStack
      h={{
        xl: "auto",
        lg: "100vh",
        md: "100vh",
        sm: "100vh",
      }}
      position="relative"
      // bg="#F9F9F9"

      fontFamily="heading"
      pt={2}
      paddingX={{ base: 5, md: 10, lg: 20 }}
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
          spacing={{ base: 6, lg: 10 }}
        >
          <VStack
            spacing={3}
            w={{ base: "100%", lg: "50%" }}
            alignItems={{ base: "center", lg: "flex-start" }}
          >
            <Image
              src="images/hero-c-1.svg"
              alt="Hero Image"
              width={100}
              height={100}
              ml={{ base: 0, lg: -19.9 }}
              alignSelf="center"
              w={{
                base: "100%",
                sm: "100%",
                lg: "90%",
              }}
              h="80%"
            />
            <Text
              color="#424242"
              fontSize={{
                base: "14px",
                lg: "16px",
              }}
              fontWeight="400"
              marginBottom={{ base: 10, lg: 4 }}
              fontFamily="heading"
              textAlign={{ base: "center", lg: "left" }}
            >
              Looking for an online tutor? QuikLearn is the leading online
              learning platform
            </Text>
            <Stack direction={"row"} width="100%" height="48px">
              <Input
                placeholder={"Search here"}
                bg="white"
                borderWidth={1}
                borderColor="#DCDCE5"
                _focus={{
                  bg: "whiteAlpha.300",
                }}
                height="100%"
              />
              <Button bg="#0065FF" color="white" text="Search" width={130} />
            </Stack>
          </VStack>
          <Stack w={{ base: "100%", lg: "50%" }}>
            <Image
              src="images/hero-c-2.svg"
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

export default SingleHero;
