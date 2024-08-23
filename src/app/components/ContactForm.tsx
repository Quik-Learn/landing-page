"use client";

import {
  Box,
  FormControl,
  FormLabel,
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
        base: 150,
        sm: 130,
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
        alignSelf="flex-start"
        mb={3}
      >
        Get in Touch with{" "}
        <Text as="span" color="#FFCE0F">
          Us!
        </Text>
      </Heading>
      <HStack
        spacing={2}
        width="full"
        p={10}
        mt={10}
        justifyContent="space-around"
        alignItems="flex-start"
      >
        {/* Left Column (Smaller Width) */}
        <Box w={{ base: "100%", lg: "60%" }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="4">
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                placeholder="Enter First Name"
                bg="#FCFCFD"
                border="none"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Enter Last Name" bg="#FCFCFD" border="none" />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="4" mt="6">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your Email"
                bg="#FCFCFD"
                border="none"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input
                placeholder="Enter Phone Number"
                bg="#FCFCFD"
                border="none"
              />
            </FormControl>
          </SimpleGrid>
          <FormControl mt="6">
            <FormLabel>Subject</FormLabel>
            <Input
              placeholder="Enter your Subject"
              bg="#FCFCFD"
              border="none"
            />
          </FormControl>
          <FormControl my="6">
            <FormLabel>Message</FormLabel>
            <Input
              as="textarea"
              placeholder="Enter your Message here..."
              bg="#FCFCFD"
              height="150px"
              border="none"
            />
          </FormControl>
          <Button
            bg="#0065FF"
            width={164}
            alignSelf="center"
            text="Send Your Message"
          />
        </Box>
        <Box w={{ base: "100%", lg: "40%" }}>
          <Stack spacing="6" justify="center" align="center">
            <VStack
              direction="column"
              align="center"
              bg="#FCFCFD"
              borderRadius={6}
              width={275}
              justify="center"
              height={142}
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
              width={275}
              height={142}
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
              width={275}
              height={142}
            >
              <Icon as={FaMapMarkerAlt} boxSize="6" />
              <Text>Manchester, UK</Text>
            </Stack>
            <Stack
              direction="column"
              spacing="4"
              justify="center"
              align="center"
              mt="4"
              bg="#FCFCFD"
              borderRadius={6}
              width={275}
              height={142}
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
      </HStack>
    </VStack>
  );
}

export default ContactForm;
