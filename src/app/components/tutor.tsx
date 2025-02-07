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
import Link from "next/link";
import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { RiUser4Line } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "./ui/button";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

function Rating({ rating }: any) {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "#E9AB2B" : "#fff"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "#E9AB2B" : "#fff"}
              />
            );
          }
          return (
            <BsStar
              key={i}
              style={{ marginLeft: "1" }}
              color={i < rating ? "#E9AB2B" : "#E9AB2B"}
            />
          );
        })}
    </Box>
  );
}
const TutorCard = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      bg="white"
      boxShadow="sm"
      width={{ base: "100%", lg: "882px" }}
    >
      <Flex alignItems="flex-start">
        <Image
          borderRadius={10}
          src="/images/tutor.svg"
          alt="Tutor"
          mr={4}
          h="80%"
        />
        <VStack width="full">
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            width="full"
          >
            <Box>
              <Heading as="h3" size="md">
                Phuong Y
              </Heading>
              <Badge
                bg="#FFEBF3"
                borderRadius="full"
                px={2}
                textTransform="capitalize"
              >
                Super Tutor
              </Badge>
              <HStack>
                <Icon as={GiGraduateCap} />
                <Text mt={2} fontSize="sm" color="#4D4C5C">
                  English
                </Text>
              </HStack>
              <HStack>
                <Icon as={RiUser4Line} />
                <Text mt={2} fontSize="sm" color="#4D4C5C">
                  46 active students • 894 lessons
                </Text>
              </HStack>
              <HStack>
                <Icon as={IoLanguage} />
                <Text mt={2} fontSize="sm" color="#4D4C5C">
                  Speaks English (Native),
                </Text>
              </HStack>
            </Box>
            <VStack alignItems="flex-start">
              <Rating rating={5} />
              <HStack>
                <Text ml={2} fontSize="sm">
                  14 reviews
                </Text>
                <Text ml={4} fontSize="sm">
                  50-min lesson
                </Text>
              </HStack>
            </VStack>
          </Flex>
          <Flex
            mt={4}
            justifyContent="space-between"
            alignItems="flex-start"
            width="full"
          >
            <Stack maxW="380px">
              <Text fontSize="md" fontWeight="semibold" color="#121117">
                Bio: Experienced Math Tutor
              </Text>
              {/* <Link href="/more">
                <ChakraLink fontSize="md" fontWeight="semibold" color="#121117">
                  Read More
                </ChakraLink>
              </Link> */}
            </Stack>
            <Button
              bg="#FFD700"
              text="Book trial lesson"
              width={244}
              color="#121117"
            />
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};
const tutors = Array(6).fill({
  name: "Phuong Y",
  activeStudents: 46,
  lessons: 894,
  language: "English (Native)",
  description: "Bio: Experienced Math Tutor",
  reviews: 14,
  lessonTime: "50-min lesson",
  image: "/path-to-image.jpg",
});

const Tutor = () => {
  return (
    <VStack
      py={{
        base: 150,
        sm: 130,
        md: 20,
        lg: 50,
      }}
      position="relative"
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
        Select a{" "}
        <Text as="span" color="#0A52A8">
          Tutor
        </Text>
      </Heading>
      <Divider
        orientation="horizontal"
        width="100%"
        borderColor="#DCDCE5"
        borderWidth={{ lg: "1px", base: "1px" }}
        mb={3}
        borderRadius="full"
      />
      <SimpleGrid width="full" columns={{ base: 1, md: 4 }} spacing={4}>
        <Input placeholder="I want to learn..." />
        <Select placeholder="I'm available">
          <option value="anytime">Anytime</option>
        </Select>
        <Select placeholder="Sort by: Our top pick">
          <option value="top-pick">Our top pick</option>
        </Select>
        <Input placeholder="Search by name or keyword" />
      </SimpleGrid>

      <SimpleGrid columns={1} spacing={4} alignSelf="flex-start" mt={10}>
        {tutors.map((tutor, index) => (
          <TutorCard key={index} />
        ))}
      </SimpleGrid>
      <HStack
        justify="space-between"
        mt={8}
        width="full"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <HStack spacing={2}>
          <ChakraButton
            leftIcon={<Text as="span">&larr;</Text>}
            colorScheme="gray"
            variant="outline"
          >
            Prev
          </ChakraButton>

          <ChakraButton
            rightIcon={<Text as="span">&rarr;</Text>}
            colorScheme="gray"
            variant="outline"
          >
            Next
          </ChakraButton>
        </HStack>
        <HStack spacing={2}>
          <IconButton
            aria-label="Previous page"
            icon={<MdKeyboardDoubleArrowLeft />}
            colorScheme="gray"
            variant="ghost"
            isDisabled
          />
          {Array.from({ length: 3 }).map((_, index) => (
            <ChakraButton
              key={index}
              colorScheme={index === 0 ? "blue" : "gray"}
              variant={index === 0 ? "solid" : "outline"}
            >
              {index + 1}
            </ChakraButton>
          ))}
          <IconButton
            aria-label="Next page"
            icon={<MdKeyboardDoubleArrowRight />}
            colorScheme="blue"
            variant="ghost"
          />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Tutor;
