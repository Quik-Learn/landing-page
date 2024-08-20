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
import HeroImage from "../../assets/images/hero.svg";
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
      pt={{
        base: 150,
        sm: 130,
        md: 140,
        lg: 120,
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
            base: "column",
            sm: "column",
            lg: "row",
          }}
          py={2}
          spacing={{ base: 6, lg: 0 }}
        >
          <VStack
            spacing={3}
            w={{ base: "100%", lg: "50%" }}
            alignItems={{ base: "center", lg: "flex-start" }}
          >
            <Text
              color="#1E1E1E"
              fontSize={{
                base: "30px",
                sm: "50px",
                lg: "70px",
              }}
              fontWeight="700"
              fontFamily="DM Sans"
              textAlign={{ base: "center", lg: "left" }}
            >
              Unlock Your Child’s
              <br />{" "}
              <Text as="span" color="#FF8C00">
                Full Potential
              </Text>{" "}
              with <br /> Expert Tutors!
            </Text>

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
              src={HeroImage}
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
