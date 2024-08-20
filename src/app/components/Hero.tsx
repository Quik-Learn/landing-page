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

const Hero = () => {
  return (
    <VStack
      h={{
        xl: "auto",
        lg: "100vh",
        md: "100vh",
        sm: "100vh",
      }}
      mt={{
        base: 150,
        sm: 130,
        md: 120,
        lg: 110,
      }}
      position="relative"
      bg="#F9F9F9"
      fontFamily="heading"
      padding={{ base: 5, md: 10, lg: 20 }}
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
              src="images/hero2.svg"
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
              ml={{ base: 0, lg: -40 }}
            />
            <Text
              color="#424242"
              fontSize={{
                base: "20px",
                lg: "24px",
              }}
              fontWeight="500"
              marginBottom={{ base: 10, lg: 4 }}
              fontFamily="heading"
              textAlign={{ base: "center", lg: "left" }}
            >
              Personalized Learning for Every Child, Anytime, Anywhere.
            </Text>

            <Button
              color="white"
              icon={<AiOutlineArrowRight />}
              iconPosition="right"
              bgGradient="linear(to-r, #0065FF, #181F79)"
              text="Start Learning Today!"
              width={{ base: "90vw", lg: "328px" }}
            />
          </VStack>
          <Stack w={{ base: "100%", lg: "50%" }}>
            <Image
              src="images/hero.svg"
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
