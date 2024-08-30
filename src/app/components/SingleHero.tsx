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
  Image,
  Box,
  Icon,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";

import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "./ui/button";
import { FiClock } from "react-icons/fi";
import { PiStudent } from "react-icons/pi";
import { LuDot } from "react-icons/lu";

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
            base: "column",
            sm: "column",
            lg: "row",
          }}
          spacing={{ base: 6, lg: 10 }}
        >
          <Box
            borderRadius="md"
            boxShadow="md"
            overflow="hidden"
            bg="white"
            mb={10}
            width={{ base: "100%", md: 394 }}
          >
            <Image src="/images/course-1.svg" alt="lll" objectFit="cover" />
            <VStack p={4} align="start" gap={4}>
              <Heading size="md" fontWeight="medium">
                Mathematics - K2 to K5 level,(Advanced Mathematics)
              </Heading>

              <HStack justify="space-between" w="100%">
                <HStack spacing={1}>
                  <Icon as={FiClock} />
                  <Text fontSize="base" color="#4D4C5C" fontWeight="semibold">
                    5 - 7 hours
                  </Text>
                </HStack>
                <HStack spacing={1}>
                  <Icon as={PiStudent} />

                  <Text fontSize="base" color="#4D4C5C" fontWeight="semibold">
                    234 Learners
                  </Text>
                </HStack>
              </HStack>
            </VStack>
          </Box>
          <Box
            borderRadius="md"
            boxShadow="md"
            overflow="hidden"
            bg="white"
            mb={10}
            borderWidth={1}
            borderColor="#D9D9D9"
            w={{ base: "100%", lg: "80%" }}
            p={{ base: 10, lg: 7 }}
          >
            <Heading size="xl" fontWeight="bold" mb={10}>
              What this course covers!
            </Heading>
            <Text fontSize="lg" color="#59595A" mb={10}>
              Build a strong math foundation with this course. You will learn
              counting, place value, and number patterns; learn to add and
              subtract within 20; and explore basic multiplication, division,
              and fractions. Additionally, you will measure length, mass, and
              capacity, uncover the characteristics of 2D and 3D shapes, and
              explore patterns in an enjoyable, practical manner.
            </Text>
            <HStack>
              <List
                spacing={3}
                flexDir={{ base: "column", md: "row" }}
                flexWrap="wrap"
              >
                <ListItem fontSize="lg" color="#59595A">
                  <Icon as={LuDot} color="green.500" />
                  Counting, place value, number patterns, odd/even.
                </ListItem>
                <ListItem fontSize="lg" color="#59595A">
                  <Icon as={LuDot} color="green.500" />
                  Add/subtract within 20 using number lines, practical methods.
                </ListItem>
                <ListItem fontSize="lg" color="#59595A">
                  <Icon as={LuDot} color="green.500" />
                  Intro to multiplication, division with arrays and repeated
                  addition.
                </ListItem>
              </List>
              <List
                spacing={3}
                flexDir={{ base: "column", md: "row" }}
                flexWrap="wrap"
              >
                <ListItem fontSize="lg" color="#59595A">
                  <Icon as={LuDot} color="green.500" />
                  Understanding fractions using models and practical activities.
                </ListItem>
                <ListItem fontSize="lg" color="#59595A">
                  <Icon as={LuDot} color="green.500" />
                  Measure length, mass, capacity using correct units.
                </ListItem>
                <ListItem fontSize="lg" color="#59595A">
                  <Icon as={LuDot} color="green.500" />
                  Recognize 2D/3D shapes, explore properties and patterns.
                </ListItem>
              </List>
            </HStack>
          </Box>
        </HStack>
      </Container>
    </VStack>
  );
};

export default Hero;
