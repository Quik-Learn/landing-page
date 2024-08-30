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
  Divider,
} from "@chakra-ui/react";
import HeroImage from "../../assets/images/hero.svg";
import Flexible from "../../assets/images/flexible.svg";
import Interactive from "../../assets/images/inter.svg";
import { Image } from "@chakra-ui/next-js";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "./ui/button";

const Why = () => {
  return (
    <VStack
      py={{
        base: 150,
        sm: 130,
        md: 20,
        lg: 50,
      }}
      position="relative"
      fontFamily="heading"
      padding={{ base: 5, md: 10, lg: 20 }}
      mb={20}
    >
      <Stack
        maxW={{
          lg: "1440px",
        }}
      >
        <VStack spacing={2} textAlign="center">
          <Heading
            fontSize={{
              base: 25,
              sm: 25,
              md: 51,
            }}
            color="#000000"
            fontFamily="heading"
            fontWeight="600"
            textAlign="center"
          >
            Why Choose Us
          </Heading>
          <Divider
            orientation="horizontal"
            width="116px"
            borderColor="#FFCE0F"
            borderWidth={{ lg: "10px", base: "4px" }}
            borderRadius="full"
          />
          <Text
            color="#59595A"
            fontSize={{ lg: 24, base: 16 }}
            textAlign="center"
            mt={5}
            mb={{ lg: 10 }}
          >
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras <br /> eu sit dignissim lorem nibh et. Ac
            cum eget habitasse in velit fringilla feugiat senectus in.
          </Text>
        </VStack>
        <HStack
          justify="space-between"
          flexDir={{
            base: "column",
            sm: "column",
            md: "row",
          }}
          py={20}
        >
          <Stack w={{ base: "100%", lg: "50%" }}>
            <Image
              src={Flexible}
              alt="Hero Image"
              width={100}
              height={100}
              alignSelf="center"
              w={{
                base: "100%",
                sm: "100%",
                md: "90%",
              }}
              h={{
                base: "100%",
                sm: "100%",
                md: "90%",
              }}
            />
          </Stack>
          <VStack
            alignItems={{ base: "center", lg: "flex-end" }}
            w={{ base: "100%", lg: "50%" }}
          >
            <Heading
              fontSize={{
                base: 25,
                sm: 25,
                md: 51,
              }}
              color="#000000"
              fontFamily="heading"
              fontWeight="600"
              textAlign={{ base: "center", lg: "right" }}
            >
              Flexible Learning <br /> Schedule
            </Heading>

            <Text
              color="#59595A"
              fontSize={{ lg: 24 }}
              textAlign={{ base: "center", lg: "right" }}
              mt={5}
              mb={10}
            >
              From state-of-the-art facilities to innovative teaching
              methodologies, we strive to empower students with the knowledge,
              skills, and values they need to thrive in an ever-evolving world.
            </Text>
          </VStack>
        </HStack>
        <HStack
          justify="space-between"
          flexDir={{
            base: "column-reverse",
            sm: "column-reverse",
            md: "row",
          }}
          py={2}
        >
          <VStack
            spacing={3}
            w={{ base: "100%", lg: "50%" }}
            alignItems={{ base: "center", lg: "flex-start" }}
          >
            <Heading
              fontSize={{
                base: 25,
                sm: 25,
                md: 51,
              }}
              color="#000000"
              fontFamily="heading"
              fontWeight="600"
              textAlign={{ base: "center", lg: "left" }}
            >
              Interactive Learning <br /> Environment
            </Heading>

            <Text
              color="#59595A"
              fontSize={{ lg: 24 }}
              textAlign={{ base: "center", lg: "left" }}
              mt={5}
              mb={10}
            >
              From state-of-the-art facilities to innovative teachingar
              methodologies, we strive to empower students with the knowledge,
              skills, and values.
            </Text>
            <HStack
              spacing={10}
              justifyContent="space-around"
              fontFamily="heading"
            >
              <Stack>
                <Text
                  color="#FFCE0F"
                  fontSize={{ base: 35, md: 57 }}
                  fontWeight={700}
                  fontFamily="heading"
                >
                  57k+
                </Text>
                <Text fontSize={{ base: 10, md: 18 }} fontWeight={700}>
                  Happy Clients
                </Text>
              </Stack>
              <Stack>
                <Text
                  color="#0065FF"
                  fontSize={{ base: 35, md: 57 }}
                  fontWeight={700}
                  fontFamily="heading"
                >
                  11k+
                </Text>
                <Text fontSize={{ base: 12, md: 18 }} fontWeight={700}>
                  Reviews
                </Text>
              </Stack>
            </HStack>
          </VStack>
          <Stack w={{ base: "100%", lg: "50%" }}>
            <Image
              src={Interactive}
              alt="Hero Image"
              width={100}
              height={100}
              alignSelf="center"
              w={{
                base: "100%",
                sm: "100%",
                md: "90%",
              }}
              h={{
                base: "100%",
                sm: "100%",
                md: "90%",
              }}
            />
          </Stack>
        </HStack>
      </Stack>
    </VStack>
  );
};

export default Why;
