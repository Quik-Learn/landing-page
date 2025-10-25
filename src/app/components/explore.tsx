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
  Box,
  SimpleGrid,
  Flex,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
// import { Image } fimport { IoMdArrowRoundForward } from "react-icons/io";rom "@chakra-ui/next-js";
import { FeatureProps } from "../types";
import { service } from "../utils/data";
import Button from "./ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
const Feature = ({
  title,
  image,
  id,
  color,
  bg,
  desc,
  router,
}: FeatureProps) => {
  return (
    <Stack
      bg={"white"}
      align={"center"}
      justify={"center"}
      spacing={5}
      borderRadius={45}
      borderWidth="1px"
      borderColor="#FDD3D3"
      fontFamily="heading"
      padding={2}
      w={{ base: "100%", sm: "45vw", md: "30vw", lg: 415 }}
      h={626}
    >
      <Stack bg={bg} borderRadius={45}  p={4} h={"100%"} w={"100%"}>
        <Stack
          bg="white"
          borderRadius={24}
          borderWidth={0.5}
          borderColor={color}
          padding="5px"
          align="center"
          justify={"center"}
          mb={4}
          w={131}
        >
          <Text color={color}>{title}</Text>
        </Stack>

        <Image
          src={image}
          w={{
            base: "100%",

            lg: "100%",
          }}
          h={{ base: 180, lg: 232 }}
          alt={`${id}expolore`}
          alignSelf={"center"}
        />
      </Stack>
      <Stack p={5} gap={2}>
        <Text fontSize={14} color="#000" fontFamily="heading">
          {desc}
        </Text>
        <Button
          text="View Course"
          borderRadius={42}
          bg="#E7F4FF"
          color="#000"
          alignSelf={"flex-end"}
          onClick={() => router.push(`/courses?category=${id}`)}
          fontWeight={400}
          width={127}
        />
      </Stack>
    </Stack>
  );
};

const Explore = () => {
  const [baseSubjects, setBaseSubjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleNext = () => {
    if (currentIndex + 3 < baseSubjects.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const getBaseSubjects = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://backend.quiklearn.co.uk/subjects/get_base_subjects/"
      );
      const data = await res.json();

      // Rotate colors from service array
      const colorSchemes = service.map((item) => ({
        color: item.color,
        bg: item.bg,
      }));

      const subjectsWithColors = data?.data.map((subject: any, index: any) => ({
        ...subject,
        color: colorSchemes[index % colorSchemes.length].color,
        bg: colorSchemes[index % colorSchemes.length].bg,
      }));

      setBaseSubjects(subjectsWithColors);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBaseSubjects();
  }, []);

  return (
    <VStack
      py={{
        base: 150,
        sm: 130,
        md: 20,
        lg: 120,
      }}
      position="relative"
      bg="#FEFDF9"
      id="courses"
      padding={{ base: 5, md: 10, lg: 20 }}
    >
      <Stack position="relative" alignItems="center">
        <Image
          src="images/yellow.svg"
          alt="Hero Image"
          position="absolute"
          top={20}
          left={20}
        />
        <Image
          src="images/pink.svg"
          alt="Hero Image"
          position="absolute"
          top={50}
          right={20}
        />
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
          Explore by{" "}
          <Text as="span" color="#0A52A8">
            Subjects
          </Text>
        </Heading>
        <Text
          color="black"
          textAlign="center"
          fontFamily="heading"
          mb={20}
          w={{ md: "50%" }}
        >
          Explore our wide range of subjects tailored to help every student
          excel. From Math, Science and Languages, our expert tutors are here to
          guide your every step to success.
        </Text>
      </Stack>
      <Box>
        {loading ? (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing={10}>
            <Skeleton
              w={{ base: "100%", sm: "45vw", md: "30vw", lg: 415 }}
              h={626}
            />
            <Skeleton
              w={{ base: "100%", sm: "45vw", md: "30vw", lg: 415 }}
              h={626}
            />
            <Skeleton
              w={{ base: "100%", sm: "45vw", md: "30vw", lg: 415 }}
              h={626}
            />
          </SimpleGrid>
        ) : (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing={10}>
            {baseSubjects
              ?.slice(currentIndex, currentIndex + 3)
              .map((item: any) => (
                <Feature
                  title={item.name}
                  image={item.image}
                  color={item.color}
                  bg={item.bg}
                  desc={item.description}
                  id={item.id}
                  key={item.id}
                  router={router}
                />
              ))}
          </SimpleGrid>
        )}
      </Box>
      <HStack alignSelf={"flex-end"} gap={10} mt={6}>
        <IconButton
          aria-label="toggle navigation"
          bg="#fff"
          color="#000000"
          borderRadius={"50%"}
          w={{ base: 50, lg: 90 }}
          h={{ base: 50, lg: 90 }}
          borderColor={"#FFCFCF"}
          borderWidth={1}
          icon={<IoMdArrowBack size={30} />}
          onClick={handlePrevious}
          isDisabled={currentIndex === 0}
          _hover={{
            bg: "primary",
          }}
        />
        <IconButton
          aria-label="toggle navigation"
          bg="#fff"
          color="#000000"
          borderRadius={"50%"}
          w={{ base: 50, lg: 90 }}
          h={{ base: 50, lg: 90 }}
          borderColor={"#FFCFCF"}
          icon={<IoMdArrowForward size={30} />}
          borderWidth={1}
          onClick={handleNext}
          isDisabled={currentIndex + 3 >= baseSubjects.length}
          _hover={{
            bg: "primary",
          }}
        />
      </HStack>
    </VStack>
  );
};

export default Explore;
