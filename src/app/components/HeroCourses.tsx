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
  Skeleton,
  Image,
} from "@chakra-ui/react";

import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "./ui/button";
import { service } from "../utils/data";

const HeroCourses = ({ title, description, image, loading }: any) => {
  const course = service?.find((item) => item.title === title);
  return (
    <VStack
      position="relative"
      // bg="#F9F9F9"

      fontFamily="heading"
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
            pt={20}
            paddingX={{ base: 5, md: 10, lg: 20 }}
            justify="space-between"
            flexDir={{
              base: "column-reverse",
              sm: "column-reverse",
              lg: "row",
            }}
            spacing={{ base: 6, lg: 10 }}
          >
            <Skeleton w={{ base: "100%", lg: "50%" }} h="100%" />
            <Skeleton w={{ base: "100%", lg: "50%" }} h="100%" />
          </HStack>
        ) : (
          <HStack
            w="100%"
            pt={{ base: 10, lg: 20 }}
            paddingX={{ base: 5, md: 6, lg: 20 }}
            justify="space-between"
            flexDir={{
              base: "column-reverse",
              sm: "column-reverse",
              lg: "row",
            }}
            spacing={{ base: 4, lg: 10 }}
            bg={title?.length ? course?.bg : "transparent"}
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
                textAlign="center"
              >
                <Text as={"span"} color="#0A52A8" marginRight={2}>
                  {title}
                </Text>
                Courses
              </Heading>
              <Text
                color="#424242"
                fontSize={{
                  base: "14px",
                  lg: "16px",
                }}
                fontWeight="400"
                marginBottom={{ base: 10, lg: 4 }}
                fontFamily="heading"
                textAlign={{ base: "center", lg: "left" }}
              >
                {description}
              </Text>

              {/* <Stack direction={"row"} width="100%" height="48px">
              <Input
                placeholder={"Search here"}
                bg="white"
                borderWidth={1}
                borderColor="#DCDCE5"
                _focus={{
                  bg: "whiteAlpha.300",
                }}
                height="100%"
              />
              <Button bg="#0065FF" color="white" text="Search" width={130} />
            </Stack> */}
            </VStack>
            <Stack
              w={{ base: "200px", lg: "50%" }}
              h={{ base: "200px", lg: "100%" }}
            >
              <Image
                src={image}
                alt="Hero Image"
                alignSelf="center"
                width={"100%"}
                height={"100%"}
              />
            </Stack>
          </HStack>
        )}
      </Container>
    </VStack>
  );
};

export default HeroCourses;
