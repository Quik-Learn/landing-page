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
    image: "/images/child.svg",

    description:
      "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field..",
  },
  {
    name: "Promote Collaboration and Community",
    img: "/images/two.svg",
    image: "/images/children.svg",

    description:
      "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where ",
  },
];
const Goal = ({ item }: any) => {
  return (
    <HStack flexDirection={{ base: "column", md: "row" }}>
      <VStack
        width="full"
        alignItems="flex-start"
        w={{ base: "100%", md: "50%" }}
      >
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
      <Image
        w={{ base: "100%", md: "50%" }}
        borderRadius={10}
        src={item.image}
        alt="Tutor"
      />
    </HStack>
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
        alignSelf="center"
        textAlign={"center"}
        mb={3}
      >
        Our Goals
      </Heading>
      <Text
        color="59595A"
        alignSelf="center"
        textAlign={"center"}
        fontFamily="heading"
        mb={10}
        fontSize={{ base: "18px", lg: "24px" }}
      >
        At QuiKLearn, our goal is to empower individuals from all backgrounds to
        thrive in the world of design and
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 1 }}
        spacing={6}
        alignSelf="flex-start"
        mt={10}
      >
        {/* {goal.map((item, index) => (
          <Goal item={item} key={index} />
        ))} */}
        <HStack flexDirection={{ base: "column", md: "row" }}>
          <VStack
            width="full"
            alignItems="flex-start"
            w={{ base: "100%", md: "50%" }}
          >
            <IconButton
              aria-label="toggle navigation"
              bg="#FFF9F0"
              w={7}
              h={7}
              color="#FF9500"
              icon={
                <Image
                  borderRadius={10}
                  src={goal[0]?.img}
                  alt="Tutor"
                  h={19}
                  w={28}
                />
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
              {goal[0]?.name}
            </Heading>
            <Text
              mt={2}
              fontSize={{ base: "18px", lg: "24px" }}
              color="#59595A"
            >
              {goal[0]?.description}
            </Text>
          </VStack>
          <Image
            w={{ base: "100%", md: "50%" }}
            borderRadius={10}
            src={goal[0]?.image}
            alt="Tutor"
          />
        </HStack>
        <HStack flexDirection={{ base: "column", md: "row-reverse" }}>
          <VStack
            width="full"
            alignItems="flex-start"
            w={{ base: "100%", md: "50%" }}
          >
            <IconButton
              aria-label="toggle navigation"
              bg="#FFF9F0"
              w={7}
              h={7}
              color="#FF9500"
              icon={
                <Image
                  borderRadius={10}
                  src={goal[1]?.img}
                  alt="Tutor"
                  h={19}
                  w={28}
                />
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
              {goal[1].name}
            </Heading>
            <Text
              mt={2}
              fontSize={{ base: "18px", lg: "24px" }}
              color="#59595A"
            >
              {goal[1].description}
            </Text>
          </VStack>
          <Image
            w={{ base: "100%", md: "50%" }}
            borderRadius={10}
            src={goal[1].image}
            alt="Tutor"
          />
        </HStack>
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
