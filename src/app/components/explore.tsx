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
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
// import { Image } fimport { IoMdArrowRoundForward } from "react-icons/io";rom "@chakra-ui/next-js";
import { FeatureProps } from "../types";
import { service } from "../utils/data";
import Button from "./ui/button";
import { useRouter } from "next/navigation";
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
      padding={1}
      w={{ base: "100%", sm: "45vw", md: "30vw", lg: 415 }}
      h={626}
    >
      <Stack bg={bg} borderRadius={45} p={8} h={456} w={"100%"}>
        <Stack
          bg="white"
          borderRadius={24}
          borderWidth={0.5}
          borderColor={color}
          padding="10px"
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
            base: 180,

            lg: 180,
          }}
          h={242}
          alt={`${id}expolore`}
          alignSelf={"center"}
        />
      </Stack>
      <Stack p={10}>
        <Text fontSize={14} color="#000" fontFamily="heading">
          {desc}
        </Text>
        <Button
          text="View Course"
          borderRadius={42}
          bg="#E7F4FF"
          color="#000"
          alignSelf={"flex-end"}
          onClick={() => router.push(`/courses?category=${title}`)}
          fontWeight={400}
          width={127}
        />
      </Stack>
    </Stack>
  );
};

const Explore = () => {
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
      bg="#FEFDF9"
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
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing={10}>
          {service?.map((item) => (
            <Feature
              title={item.title}
              image={item.image}
              color={item.color}
              bg={item.bg}
              desc="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem "
              id={item.id}
              key={item.id}
              router={router}
            />
          ))}
        </SimpleGrid>
      </Box>
      <HStack alignSelf={"flex-end"} gap={10} mt={6}>
        <IconButton
          aria-label="toggle navigation"
          bg="#fff"
          color="#000000"
          borderRadius={"50%"}
          w={90}
          h={90}
          borderColor={"#FFCFCF"}
          borderWidth={1}
          icon={<IoMdArrowBack size={30} />}
          _hover={{
            bg: "primary",
          }}
        />
        <IconButton
          aria-label="toggle navigation"
          bg="#fff"
          color="#000000"
          borderRadius={"50%"}
          w={90}
          h={90}
          borderColor={"#FFCFCF"}
          icon={<IoMdArrowForward size={30} />}
          borderWidth={1}
          _hover={{
            bg: "primary",
          }}
        />
      </HStack>
    </VStack>
  );
};

export default Explore;
