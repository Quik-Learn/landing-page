/* eslint-disable react/no-unescaped-entities */
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
  Box,
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
            fontSize={{ lg: 20, base: 16 }}
            textAlign="center"
            mt={5}
            mb={{ lg: 10 }}
            maxW="950px"
          >
            Experts tutors, personalized learning, and proven results - discover
            why students and parents trust us for academic success.
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
              fontSize={{ lg: 20 }}
              textAlign={{ base: "center", lg: "right" }}
              mt={5}
              mb={10}
              maxW="500px"
            >
              We offer flexible tutoring schedules to accommodate the busy lives
              of our students and their families. Whether it's after school, on
              weekends, or during holidays, we strive to provide tutoring
              sessions at times that are most convenient for you.
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
          gap={10}
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
              fontSize={{ lg: 20 }}
              textAlign={{ base: "center", lg: "left" }}
              mt={5}
              mb={10}
              maxW="500px"
            >
              Experience an interactive learning environment where personalised
              guidance meets dynamic resources, ensuring every student achieves
              their full potential.
            </Text>
          </VStack>
          <Stack
            position="relative"
            w={{ base: "100%", lg: "50%" }}
            display={{ base: "none", lg: "block" }}
          >
            <Image
              src="/svg/rectangle.png"
              alt="Hero Image"
              width={100}
              height={100}
              position="absolute"
              top="-50px"
              left="-70px"
              alignSelf="left"
              w="auto"
              h="auto"
              zIndex={-1}
            />
            <Box>
              <Image
                src="/svg/learning.png"
                alt="Hero Image"
                width={80}
                height={80}
                alignSelf="center"
                w="auto"
                h="auto"
              />
            </Box>
            <Box
              maxW="250px"
              bg="white"
              position="absolute"
              rounded="2xl"
              top="50%"
              left="-70px"
              padding="12px"
              paddingLeft="20px"
              shadow="2xl"
            >
              <HStack>
                <Image
                  src="/svg/cap.svg"
                  alt="Hero Image"
                  width={16}
                  height={16}
                  w="auto"
                  h="auto"
                />
                <Text fontWeight="bold" fontSize={18}>
                  Interactive Whiteboard
                </Text>
              </HStack>
              <Text color="#ACACAC" fontSize={16} mt={2} fontWeight={500}>
                Engage with our interactive whiteboard for hands-on learning
              </Text>
            </Box>
            <Box
              maxW="250px"
              bg="white"
              position="absolute"
              rounded="2xl"
              top="30%"
              right="-70px"
              padding="12px"
              paddingLeft="20px"
              shadow="2xl"
            >
              <HStack>
                <Image
                  src="/svg/edu.svg"
                  alt="Why choose us"
                  width={16}
                  height={16}
                  w="auto"
                  h="auto"
                />
                <Text fontWeight="bold" fontSize={18}>
                  Interactive Test
                </Text>
              </HStack>
              <Text color="#ACACAC" fontSize={16} mt={2} fontWeight={500}>
                Boost learning with our interactive test tools engage, learn,
                and excel.
              </Text>
            </Box>
            <Box
              maxW="250px"
              bg="white"
              position="absolute"
              rounded="2xl"
              bottom="-30px"
              right="-10px"
              padding="16px"
              paddingLeft="20px"
              shadow="2xl"
            >
              <HStack>
                <Image
                  src="/svg/book.svg"
                  alt="Hero Image"
                  width={16}
                  height={16}
                  w="auto"
                  h="auto"
                />
                <Text fontWeight="bold" fontSize={18}>
                  Online Library
                </Text>
              </HStack>
              <Text color="#ACACAC" fontSize={16} mt={2} fontWeight={500}>
                Explore our online library for diverse, anytime learning
                resources.
              </Text>
            </Box>
          </Stack>
          <Stack
            w={{ base: "100%", lg: "50%" }}
            display={{ base: "block", lg: "none" }}
          >
            <Image
              src={Interactive}
              alt="Interactive Learning"
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
