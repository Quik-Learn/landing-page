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

import HeroImage from "../../assets/images/geo.svg";
// import { Image } from "@chakra-ui/next-js";
import { FeatureProps } from "../types";
import { service } from "../utils/data";
const Feature = ({ title, image, id, color }: FeatureProps) => {
  return (
    <Stack
      bg={color}
      align={"center"}
      justify={"center"}
      spacing={5}
      borderTopLeftRadius={50}
      borderTopRightRadius={10}
      borderBottomRightRadius={50}
      borderBottomLeftRadius={10}
      fontFamily="heading"
      padding={4}
      w={{ base: "100%", sm: "45vw", md: "30vw", lg: 316 }}
      h={362}
    >
      <Image
        src={image}
        w={{
          base: title === "Explore All Courses" ? 35 : "100%",

          lg: title === "Explore All Courses" ? 35 : 282,
        }}
        h={title === "Explore All Courses" ? 35 : 282}
        alt={`${id}expolore`}
      />

      <Text fontWeight={600} fontSize={14} color="white" fontFamily="heading">
        {title}
      </Text>
    </Stack>
  );
};

const Explore = () => {
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
      <Text color="black" textAlign="center" fontFamily="heading" mb={20}>
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras eu sit dignissim lorem
      </Text>
      <Box>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10}>
          {service?.map((item) => (
            <Feature
              title={item.title}
              image={item.image}
              color={item.color}
              id={item.id}
              key={item.id}
            />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default Explore;
