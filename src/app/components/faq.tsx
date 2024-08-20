"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Box,
  VStack,
  Heading,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { VscClose } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";

export default function Faq() {
  const accordionData = [
    {
      title: "Can I enroll in multiple courses at once?",
      content:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      title: "Enrollment Process for Different Courses",
      content:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      title: "What kind of support can I expect from instructors?",
      content:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      title: "What kind of support can I expect from instructors?",
      content:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      title: "Enrollment Process for Different Courses",
      content:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      title: "What kind of support can I expect from instructors?",
      content:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
  ];

  return (
    <Box
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      bg="#0A52A8"
      backgroundImage="/images/underlay.png"
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      padding={{ base: 5, md: 10, lg: 20 }}
      m={{ base: 5, md: 10, lg: 20 }}
      borderRadius={42}
      maxWidth={{ xl: 1440 }}
      gap={10}
    >
      <VStack>
        <Heading
          fontSize={{
            base: 25,
            sm: 25,
            md: 51,
          }}
          color="#FFCE0F"
          fontFamily="heading"
          fontWeight="600"
        >
          Frequently Asked Questions
        </Heading>
        <Text color="white" fontSize={17}>
          Still you have any questions? Contact our Team via
          support@quiklearn.com
        </Text>

        <Image
          display={{ base: "none", md: "block" }}
          src="/images/faq-girl.svg"
          alt="girl"
        />
      </VStack>
      <VStack justifyContent="center">
        <Flex
          bg="white"
          borderRadius={32}
          padding={{ base: 3, lg: 12 }}
          width={{ base: "100%", lg: 672 }}
          mt={{ base: 10, lg: 0 }}
          height="fit-content"
        >
          <Container>
            <Accordion
              allowMultiple
              width="100%"
              rounded="lg"
              fontFamily="heading"
            >
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  mb={4}
                  borderWidth={0.69}
                  borderColor={"#F1F1F3"}
                  _expanded={{
                    borderWidth: "0px",
                    border: "none",
                  }}
                >
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton borderBottom={isExpanded ? 1 : 0}>
                          <Box as="span" flex="1" textAlign="left">
                            <Text
                              fontSize={18}
                              fontWeight={500}
                              color="#262626"
                            >
                              {item.title}
                            </Text>
                          </Box>
                          {isExpanded ? (
                            <IconButton
                              aria-label="toggle navigation"
                              bg="#D7E9FF"
                              color="#262626"
                              icon={<VscClose color="#262626" />}
                              _hover={{
                                bg: "primary",
                              }}
                            />
                          ) : (
                            <IconButton
                              aria-label="toggle navigation"
                              bg="#D7E9FF"
                              color="#262626"
                              icon={<GoPlus color="#262626" />}
                              _hover={{
                                bg: "primary",
                              }}
                            />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Text color="#4C4C4D" fontSize={18}>
                          {item.content}
                        </Text>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Flex>
      </VStack>
    </Box>
  );
}
