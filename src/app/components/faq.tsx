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
import { motion } from "framer-motion";

export default function Faq() {
  const accordionData = [
    {
      title: "What is Quik Learn?",
      content:
        "Quik Learn is a flexible learning platform designed for students from K1 to K12 in the UK. It combines a Learning Management System (LMS) with live video tutoring to give students both structured self-paced learning and personalised one-on-one or group lessons.",
    },
    {
      title: "What subjects do you cover?",
      content:
        "We cover the UK national curriculum subjects including Maths, English, Science, and additional enrichment areas like languages, coding, and test preparation (SATs, GCSEs, 11+).",
    },
    {
      title: "Is Quik Learn only for UK-based students?",
      content:
        "Our curriculum is tailored to the UK system, but international students who want to follow or strengthen their understanding of the UK curriculum are welcome to join.",
    },
    {
      title: "How does Quik Learn deliver lessons?",
      content: (
        <>
          <Text
            display="block"
            mb={2}
            fontSize={{ base: 10, sm: 12, md: 14, lg: 18 }}
            color="#4C4C4D">
            Lessons are delivered in two ways:
          </Text>
          <Box as="ul" pl={5} color="#4C4C4D" fontSize={{ base: 10, sm: 12, md: 14, lg: 18 }}>
            <li>
              Through the LMS, where students access structured modules,
              assignments, and quizzes.
            </li>
            <li>Via live video conferencing sessions with qualified tutors.</li>
          </Box>
        </>
      ),
    },
    {
      title: "What is the duration of a typical lesson?",
      content:
        "Standard lessons last 45–60 minutes, but session length can be adjusted depending on the student’s age, level, and needs.",
    },
    {
      title: "Can sessions be rescheduled or cancelled?",
      content:
        "Yes, sessions can be rescheduled or cancelled with prior notice. Our platform makes it easy to manage bookings directly from your dashboard.",
    },
    {
      title: "Who are the tutors on Quik Learn?",
      content:
        "All tutors are qualified professionals with experience teaching K1–K12 students in the UK. Each tutor is carefully vetted for subject knowledge, teaching skills, and student engagement. We run background checks, request references, and provide ongoing training to ensure our tutors meet the highest teaching standards.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box maxWidth={{ xl: "1440px" }} marginX="auto" bg="#0A52A8" rounded="3xl"  id="faq">
        <Box
          position="relative"
          backgroundPosition="start"
          justifyContent="start"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage="/images/underlay.png"
          width="100%"
          display="flex"
          flexDir={{ base: "column", md: "row" }}
          paddingTop={{ base: 5, md: 10, lg: 20 }}
          paddingX={{ base: 5, md: 10, lg: 20 }}
          marginY={{ base: 5, md: 10, lg: 20 }}
          borderRadius={42}
          gap={10}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <VStack>
              <Heading
                fontSize={{
                  base: 25,
                  sm: 25,
                  md: 48,
                }}
                color="#FFCE0F"
                fontFamily="heading"
                fontWeight="600"
              >
                Frequently Asked Questions
              </Heading>
              <Text color="white" fontSize={17} pb={6}>
                Still you have any questions? Contact our Team via
                support@quiklearn.com
              </Text>

          <Image
            display={{ base: "none", md: "block" }}
            src="/images/faq-girl.svg"
            position="absolute"
            height={{ base: "100%", md: "65%" }}
            left={{ base: 0, md: 0, lg: 0 }}
            bottom={{ base: 0, md: 0, lg: 0 }}
            alt="girl"
          />
        </VStack>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <VStack justifyContent="center">
            <Flex
              bg="white"
              borderRadius={32}
              padding={{ base: 3, lg: 8 }}
              width={{ base: "100%", lg: 672 }}
              mt={{ base: 0, lg: 0 }}
              mb={{ base: 5, md: 10 }}
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <AccordionItem
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
                            <AccordionButton
                              borderBottom={isExpanded ? 1 : 0}
                              padding={{ base: 1, sm: 3, md: 5, lg: 5 }}
                            >
                              <Box as="span" flex="1" textAlign="left">
                                <Text
                                  fontSize={{ base: 10, sm: 12, md: 14, lg: 18 }}
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
                                  fontSize={{ base: 12, sm: 12, md: 14, lg: 18 }}
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
                                  fontSize={{ base: 12, sm: 12, md: 14, lg: 18 }}
                                />
                              )}
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            {typeof item.content === "string" ? (
                              <Text
                                color="#4C4C4D"
                                fontSize={{ base: 10, sm: 12, md: 14, lg: 18 }}
                              >
                                {item.content}
                              </Text>
                            ) : (
                              item.content
                            )}
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </Container>
          </Flex>
        </VStack>
        </motion.div>
      </Box>
    </Box>
    </motion.div>
  );
}
