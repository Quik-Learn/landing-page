/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  VStack,
  Container,
  HStack,
  Heading,
  Text,
  Tooltip,
  Link as ChakraLink,
  IconButton,
  Box,
  SimpleGrid,
  Button as ChakraButton,
  Image,
  Icon,
  GridItem,
  Grid,
  List,
  ListItem,
  ListIcon,
  Stack,
  Input,
  Select,
} from "@chakra-ui/react";
import { LuDot } from "react-icons/lu";
import { FeatureProps } from "../types";
import { coursesArray, service } from "../utils/data";
import { FiClock } from "react-icons/fi";
import { PiStudent } from "react-icons/pi";
import Button from "./ui/button";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useRouter } from "next/navigation";
const CourseCard = ({
  title,
  description,
  imageSrc,
  duration,
  learners,
  router,
}: any) => (
  <Box borderRadius="md" boxShadow="md" overflow="hidden" bg="white" mb={10}>
    <Image src={imageSrc} alt={title} w="100%" h={320} objectFit="cover" />
    <VStack p={4} align="start" gap={4}>
      <Heading size="md" fontWeight="medium">
        {title}
      </Heading>

      <HStack justify="space-between" w="100%">
        <HStack spacing={1}>
          <Icon as={FiClock} />
          <Text fontSize="base" color="#4D4C5C" fontWeight="semibold">
            {duration}
          </Text>
        </HStack>
        <HStack spacing={1}>
          <Icon as={PiStudent} />
          <Tooltip hasArrow label="Phone number" fontSize="md">
            <Text fontSize="base" color="#4D4C5C" fontWeight="semibold">
              {learners} Learners
            </Text>
          </Tooltip>
        </HStack>
      </HStack>
      <Tooltip
        hasArrow
        bg="white"
        label={
          <Box
            p={2}
            borderRadius={12}
            boxShadow="5px 5px 18px rgba(0, 0, 0, 0.03)"
          >
            <VStack p={4} align="start" gap={4}>
              <Heading size="base" fontWeight="medium" color="black">
                {title}
              </Heading>

              <HStack justify="space-between" w="100%">
                <HStack spacing={1}>
                  <Icon as={FiClock} />
                  <Text fontSize="sm" color="#4D4C5C" fontWeight="semibold">
                    {duration}
                  </Text>
                </HStack>
                <HStack spacing={1}>
                  <Icon as={PiStudent} />

                  <Text fontSize="sm" color="#4D4C5C" fontWeight="semibold">
                    {learners} Learners
                  </Text>
                </HStack>
              </HStack>
              <Text fontSize="xs" color="#59595A">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet{" "}
              </Text>
              <List spacing={3}>
                <ListItem fontSize="xs" color="#59595A">
                  <ListIcon as={LuDot} color="green.500" />
                  Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in
                  velit fringilla feugiat senectus in.
                </ListItem>
                <ListItem fontSize="xs" color="#59595A">
                  <ListIcon as={LuDot} color="green.500" />
                  Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in
                  velit fringilla feugiat senectus in.
                </ListItem>
                <ListItem fontSize="xs" color="#59595A">
                  <ListIcon as={LuDot} color="green.500" />
                  Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in
                  velit fringilla feugiat senectus in.
                </ListItem>
              </List>
            </VStack>
          </Box>
        }
        placement="top"
        fontSize="md"
      >
        <ChakraButton
          width="full"
          bg="#C6C6C6"
          variant="outline"
          color="white"
          onClick={() => router.push("/courses/1")}
        >
          View Details
        </ChakraButton>
      </Tooltip>
    </VStack>
  </Box>
);

const CoursesCover = ({ category }: any) => {
  const router = useRouter();
  return (
    <VStack
      py={{
        base: 150,
        sm: 130,
        md: 20,
        lg: 120,
      }}
      position="relative"
      paddingX={{ base: 5, md: 10, lg: 20 }}
    >
      {!category?.length ? (
        <Stack>
          <Heading
            fontSize={{
              base: 25,
              sm: 25,
              md: "51px",
            }}
            color="#000000"
            fontFamily="heading"
            fontWeight="600"
            textAlign={{ base: "center", md: "center" }}
            alignSelf={{ base: "center", md: "center" }}
          >
            All Available Courses
          </Heading>
          <Text
            color="#59595A"
            textAlign={{ base: "center", md: "left" }}
            fontSize={{ lg: "16px" }}
            fontFamily="heading"
            mb={10}
            alignSelf={{ base: "center", lg: "center" }}
            w={{ md: "50%" }}
          >
            Master Math with our comprehensive courses - covering everything
            from basic Numeracy, to Arithmetic to advanced Calculus.
          </Text>
        </Stack>
      ) : null}
      <SimpleGrid width="full" columns={{ base: 1, md: 4 }} spacing={4} mb={10}>
        <Input placeholder="I want to learn..." />
        <Select placeholder="I'm available">
          <option value="anytime">Anytime</option>
        </Select>
        <Select placeholder="Sort by: Our top pick">
          <option value="top-pick">Our top pick</option>
        </Select>
        <Input placeholder="Search by name or keyword" />
      </SimpleGrid>
      <Box width="full">
        <Grid
          templateColumns={{
            base: "90vw",
            lg: "repeat(auto-fill, minmax(380px, 1fr))",
          }}
          gap={4}
        >
          {coursesArray.map((course, index) => (
            <GridItem key={index}>
              <CourseCard
                title={course.title}
                description={course.description}
                imageSrc={course.imageSrc}
                duration={course.duration}
                learners={course.learners}
                router={router}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
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

export default CoursesCover;
