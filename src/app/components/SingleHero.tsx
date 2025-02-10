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
  Skeleton,
} from "@chakra-ui/react";

import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "./ui/button";
import { FiClock } from "react-icons/fi";
import { PiStudent } from "react-icons/pi";
import { LuDot } from "react-icons/lu";

const Hero = ({ course, loading }: any) => {
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
      minH="50vh"
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
        {loading ? (
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
            <Skeleton width={{ base: "100%", md: 394 }} />
            <Skeleton w={{ base: "100%", lg: "80%" }} />
          </HStack>
        ) : (
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
              <Image
                src={course?.thumbnail}
                alt="lll"
                objectFit="cover"
                w="100%"
                h="100%"
              />
              <VStack p={4} align="start" gap={4}>
                <Heading size="md" fontWeight="medium">
                  {course?.title}
                </Heading>

                <HStack justify="space-between" w="100%">
                  <HStack spacing={1}>
                    <Icon as={FiClock} />
                    <Text fontSize="base" color="#4D4C5C" fontWeight="semibold">
                      {course?.duration}
                    </Text>
                  </HStack>
                  <HStack spacing={1}>
                    <Icon as={PiStudent} />

                    <Text fontSize="base" color="#4D4C5C" fontWeight="semibold">
                      {course?.learners} Learners
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
                {course?.description}
              </Text>
              <HStack>
                <List
                  spacing={3}
                  flexDir={{ base: "column", md: "row" }}
                  flexWrap="wrap"
                >
                  {course?.achievements?.map((topic: any, index: any) => (
                    <ListItem key={index} fontSize="lg" color="#59595A">
                      <Icon as={LuDot} color="green.500" />
                      {topic?.description}
                    </ListItem>
                  ))}
                </List>
              </HStack>
            </Box>
          </HStack>
        )}
      </Container>
    </VStack>
  );
};

export default Hero;
