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
    name: "Provide Practical Skills",
    img: "/images/one.svg",

    description:
      "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
  },
  {
    name: "Foster Creative Problem-Solving",
    img: "/images/two.svg",

    description:
      "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
  },
  {
    name: "Promote Collaboration and Community",
    img: "/images/three.svg",

    description:
      "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
  },
  {
    name: "Stay Ahead of the Curve",
    img: "/images/four.svg",

    description:
      "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
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
              let's shape the future of digital <br /> innovation
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
