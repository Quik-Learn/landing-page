/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  VStack,
  HStack,
  Heading,
  Text,
  Link as ChakraLink,
  Box,
  SimpleGrid,
  Button as ChakraButton,
  Image,
  Icon,
  GridItem,
  Grid,
  Stack,
  Input,
  Select,
  NativeSelect,
  Skeleton,
} from "@chakra-ui/react";
import { Tooltip } from "./ui/tooltip";
import { FiClock } from "react-icons/fi";
import { PiStudent } from "react-icons/pi";
import { useRouter } from "next/navigation";
import Pagination from "./ui/pagination";
import { useEffect, useState } from "react";
const CourseCard = ({
  title,
  description,
  imageSrc,
  duration,
  learners,
  router,
  long_description,
  id,
}: any) => (
  <Box borderRadius="md" boxShadow="md" overflow="hidden" bg="white" mb={10}>
    <Image src={imageSrc} alt={title} w="100%" h={320} objectFit="cover" />
    <VStack p={4} align="start" gap={4}>
      <Heading size="md" fontWeight="medium">
        {title}
      </Heading>

      <HStack justify="space-between" w="100%">
        <HStack gap={1}>
          <Icon as={FiClock} />
          <Text fontSize="base" color="#4D4C5C" fontWeight="semibold">
            {duration}
          </Text>
        </HStack>
        <HStack gap={1}>
          <Icon as={PiStudent} />
          <Tooltip
            content="Phone number"
            showArrow
            contentProps={{
              bg: "black",
              color: "white",
              px: 2,
              py: 1,
              borderRadius: "md",
            }}
          >
            <Text fontSize="base" color="#4D4C5C" fontWeight="semibold">
              {learners} Learners
            </Text>
          </Tooltip>
        </HStack>
      </HStack>

      <Tooltip
        showArrow
        content={
          <Box
            p={2}
            borderRadius={12}
            boxShadow="5px 5px 18px rgba(0, 0, 0, 0.03)"
          >
            <VStack p={4} align="start" gap={4}>
              <Heading size="md" fontWeight="medium" color="black">
                {title}
              </Heading>

              <HStack justify="space-between" w="100%">
                <HStack gap={1}>
                  <Icon as={FiClock} />
                  <Text fontSize="sm" color="#4D4C5C" fontWeight="semibold">
                    {duration}
                  </Text>
                </HStack>
                <HStack gap={1}>
                  <Icon as={PiStudent} />

                  <Text fontSize="sm" color="#4D4C5C" fontWeight="semibold">
                    {learners} Learners
                  </Text>
                </HStack>
              </HStack>
              <Text fontSize="xs" color="#59595A">
                {long_description}
              </Text>
              {/* <List gap={3}>
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
              </List> */}
            </VStack>
          </Box>
        }
        positioning={{ placement: "top" }}
      >
        <ChakraButton
          width="full"
          bg="#C6C6C6"
          variant="outline"
          color="white"
          onClick={() => router.push(`/courses/${id}`)}
        >
          View Details
        </ChakraButton>
      </Tooltip>
    </VStack>
  </Box>
);

const CoursesCover = ({
  courses,
  meta,
  loading,
  getCourses,
  short_description,
  id,
}: any) => {
  const router = useRouter();
  const [text, setText] = useState("");
  useEffect(() => {
    // Fetch courses with default filters when the component mounts
    getCourses({ id, text, page: 1 });
  }, [text, id]); // Trigger fetch when filters change

  return (
    <VStack
      py={{
        base: 150,
        sm: 130,
        md: 20,
        lg: 120,
      }}
      position="relative"
      maxW="1440px"
      marginX="auto"
      paddingX={{ base: 5, md: 10, lg: 20 }}
    >
      {loading ? (
        <Skeleton height="100%" width="100%" />
      ) : (
        <>
          {courses?.length ? (
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
                {short_description}
              </Text>
            </Stack>
          ) : null}
          <SimpleGrid width="full" columns={{ base: 1, md: 4 }} gap={4} mb={10}>
            <Input
              placeholder="I want to learn..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <NativeSelect.Root>
              <NativeSelect.Field placeholder="I'm available">
                <option value="anytime">Anytime</option>
              </NativeSelect.Field>
            </NativeSelect.Root>
            <NativeSelect.Root>
              <NativeSelect.Field placeholder="Sort by: Our top pick">
                <option value="top-pick">Our top pick</option>
              </NativeSelect.Field>
            </NativeSelect.Root>
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
              {courses?.map((course: any, index: any) => (
                <GridItem key={index}>
                  <CourseCard
                    title={course.title}
                    description={course.short_description}
                    imageSrc={course.thumbnail}
                    duration={course.lesson_hours}
                    long_description={course.description}
                    learners={course.learners}
                    router={router}
                    id={course.id}
                  />
                </GridItem>
              ))}
            </Grid>
          </Box>
          <Pagination
            totalPages={meta?.total_pages}
            isLoading={loading}
            currentPage={meta?.current_page}
            next={meta?.next}
            previous={meta?.previous}
            onPageChange={(page: number) => {
              if (id) {
                getCourses({ id, text, page });
              } else {
                getCourses({ page });
              }
            }}
          />
        </>
      )}
    </VStack>
  );
};

export default CoursesCover;
