"use client";

import {
  Box,
  Field,
  Input,
  Text,
  SimpleGrid,
  Heading,
  VStack,
  HStack,
  Stack,
  Icon,
} from "@chakra-ui/react";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import Button from "./ui/button";
function ContactForm() {
  return (
    <VStack
      py={{
        base: 50,
        sm: 30,
        md: 20,
        lg: 50,
      }}
      position="relative"
      bg="white"
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
        alignSelf={{ base: "center", lg: "flex-start" }}
        mb={{ lg: 3 }}
      >
        Get in Touch!
      </Heading>
      <Stack
        gap={2}
        width="full"
        paddingX={{ base: 5, md: 10, lg: 10 }}
        mt={{ base: 5, lg: 10 }}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-around"
        alignItems="flex-start"
      >
        {/* Left Column (Smaller Width) */}
        <Box w={{ base: "100%", lg: "60%" }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
            <Field.Root>
              <Field.Label>First Name</Field.Label>
              <Input
                placeholder="Enter First Name"
                bg="#FCFCFD"
                borderWidth={1}
                borderColor="#F1F1F3"
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Last Name</Field.Label>
              <Input
                placeholder="Enter Last Name"
                bg="#FCFCFD"
                borderWidth={1}
                borderColor="#F1F1F3"
              />
            </Field.Root>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="4" mt="6">
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input
                type="email"
                placeholder="Enter your Email"
                bg="#FCFCFD"
                borderWidth={1}
                borderColor="#F1F1F3"
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Phone</Field.Label>
              <Input
                placeholder="Enter Phone Number"
                bg="#FCFCFD"
                borderWidth={1}
                borderColor="#F1F1F3"
              />
            </Field.Root>
          </SimpleGrid>
          <Field.Root mt="6">
            <Field.Label>Subject</Field.Label>
            <Input
              placeholder="Enter your Subject"
              bg="#FCFCFD"
              borderWidth={1}
              borderColor="#F1F1F3"
            />
          </Field.Root>
          <Field.Root my="6">
            <Field.Label>Message</Field.Label>
            <Input
              as="textarea"
              placeholder="Enter your Message here..."
              bg="#FCFCFD"
              height="150px"
              borderWidth={1}
              borderColor="#F1F1F3"
            />
          </Field.Root>
          <Stack align="center">
            <Button
              bg="#0065FF"
              width={164}
              alignSelf="center"
              text="Send Your Message"
            />
          </Stack>
        </Box>
        <Box w={{ base: "100%", lg: "40%" }} mt={{ base: 10, md: 0 }}>
          <Stack gap="6" justify="center" align="center">
            <VStack
              direction="column"
              align="center"
              bg="#FCFCFD"
              borderRadius={6}
              width={{ base: 200, md: 275 }}
              height={{ base: 100, md: 142 }}
              justify="center"
              borderWidth={1}
              borderColor="#F1F1F3"
            >
              <Icon as={IoMdMail} boxSize="6" />
              <Text>support@quiklearn.com</Text>
            </VStack>
            <VStack
              direction="column"
              align="center"
              justify="center"
              bg="#FCFCFD"
              borderRadius={6}
              width={{ base: 200, md: 275 }}
              height={{ base: 100, md: 142 }}
              borderWidth={1}
              borderColor="#F1F1F3"
            >
              <Icon as={MdLocalPhone} boxSize="6" />
              <Text>+91 00000 00000</Text>
            </VStack>
            <Stack
              direction="column"
              justify="center"
              align="center"
              bg="#FCFCFD"
              borderRadius={6}
              width={{ base: 200, md: 275 }}
              height={{ base: 100, md: 142 }}
              borderWidth={1}
              borderColor="#F1F1F3"
            >
              <Icon as={FaMapMarkerAlt} boxSize="6" />
              <Text>Manchester, UK</Text>
            </Stack>
            <Stack
              direction="column"
              gap="4"
              justify="center"
              align="center"
              mt="4"
              bg="#FCFCFD"
              borderRadius={6}
              width={{ base: 200, md: 275 }}
              height={{ base: 100, md: 142 }}
              borderWidth={1}
              borderColor="#F1F1F3"
            >
              <HStack justify="center">
                <Icon as={FaFacebook} boxSize="6" />
                <Icon as={FaTwitter} boxSize="6" />
                <Icon as={FaLinkedin} boxSize="6" />
              </HStack>
              <Text>Social Profiles</Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </VStack>
  );
}

export default ContactForm;
