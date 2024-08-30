"use client";

import {
  Box,
  Flex,
  Image,
  Text,
  Badge,
  Button as ChakraButton,
  SimpleGrid,
  Heading,
  Select,
  Input,
  Stack,
  Icon,
  VStack,
  Link as ChakraLink,
  HStack,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import Button from "./ui/button";
const goal = [
  {
    name: "Personalized Educational Experience",
    img: "/images/one.svg",

    description:
      "By tailoring support, providing convenient scheduling, and offering supplementary resources, Quik Learn enhances the educational journey, making learning more effective and personalized for each student.",
  },
  {
    name: "Flexible Learning Options",
    img: "/images/two.svg",

    description:
      "Quik Learn aims to offer diverse tutoring formats—online, in-person, and center-based—adapting to different learning styles and schedules, ensuring every student can learn in their preferred environment.",
  },
  {
    name: "High-Quality Instruction and Support",
    img: "/images/three.svg",

    description:
      "Quik Learn is committed to excellence by employing qualified tutors and fostering a safe, supportive learning environment. Their focus on personalized attention ensures students achieve their academic best.",
  },
  {
    name: "Diverse User Needs",
    img: "/images/four.svg",

    description:
      "Quik Learn’s subscription plans—basic, standard, and premium—cater to varied tutoring needs and preferences, ensuring every learner receives the right level of support and resources suited to their goals.",
  },
];
const Goal = ({ item }: any) => {
  return (
    <Box borderRadius="10px" overflow="hidden" p={10} bg="white" boxShadow="sm">
      <VStack width="full" alignItems="flex-start">
        <IconButton
          aria-label="toggle navigation"
          bg="#FFF9F0"
          w={7}
          h={7}
          color="#FF9500"
          icon={
            <Image borderRadius={10} src={item.img} alt="Tutor" h={19} w={28} />
          }
          _hover={{
            bg: "primary",
          }}
        />

        <Heading
          fontSize={{ base: "28px", lg: "36px" }}
          color="#262626"
          fontWeight="medium"
        >
          {item.name}
        </Heading>
        <Text mt={2} fontSize={{ base: "18px", lg: "24px" }} color="#59595A">
          {item.description}
        </Text>
      </VStack>
    </Box>
  );
};
const Goals = () => {
  return (
    <VStack
      py={{
        base: 150,
        sm: 130,
        md: 20,
        lg: 50,
      }}
      position="relative"
      bg="rgba(217, 217, 217, 0.15)"
      paddingX={{ base: 5, md: 10, lg: 20 }}
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
        alignSelf="flex-start"
        mb={3}
      >
        Our Goals
      </Heading>
      <Text
        color="59595A"
        alignSelf="flex-start"
        fontFamily="heading"
        mb={10}
        fontSize={{ base: "18px", lg: "24px" }}
      >
        At QuiKLearn, our goal is to empower individuals from all backgrounds to
        thrive in the world of design and
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={6}
        alignSelf="flex-start"
        mt={10}
      >
        {goal.map((item, index) => (
          <Goal item={item} key={index} />
        ))}
      </SimpleGrid>
      <Box
        borderRadius="10px"
        my={10}
        bg="white"
        boxShadow="sm"
        p={10}
        width="full"
      >
        <HStack justifyContent="space-between">
          <VStack width="full" alignItems="flex-start">
            <Heading
              fontSize={{ base: "28px", lg: "38px" }}
              color="#262626"
              fontWeight="semibold"
            >
              <Text color="#FF9500" as="span">
                Together,
              </Text>{" "}
              let&apos;s shape the future of digital <br /> innovation
            </Heading>
            <Text
              mt={2}
              fontSize={{ base: "14px", lg: "16px" }}
              color="#4C4C4D"
            >
              Join us on this exciting learning journey and unlock your
              potential in design and development.
            </Text>
          </VStack>
          <Button text="Join Now" bg="#FF9500" width={103} />
        </HStack>
      </Box>
    </VStack>
  );
};

export default Goals;
