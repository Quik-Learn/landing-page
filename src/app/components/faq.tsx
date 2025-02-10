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
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import { VscClose } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";
import { useState } from "react";

export default function Faq() {
  const parentFaq = [
    {
      title: "How are the tutors selected and vetted? ",
      content:
        "Our tutors are carefully selected based on their academic credentials, teaching experience, and ability to connect with students. They undergo rigorous screening and background checks to ensure their qualifications and suitability for tutoring.",
    },
    {
      title: "How often will I receive feedback on my child's performance? ",
      content:
        "You will receive regular updates on your child's progress, including detailed feedback reports and progress tracking tools. Our tutors will also be available to discuss your child's performance during parent-teacher conferences.",
    },
    {
      title:
        "Is there a trial period before committing to a long-term program? ",
      content:
        "Yes, we offer a trial period to allow you to assess the quality of our tutoring services and ensure that it meets your child's needs.",
    },
    {
      title: "Are there any discounts for multiple subjects or children?  ",
      content:
        "  We intend to offer discounts for multiple subjects and children enrolled in our tutoring program. Please contact our customer support for more information.",
    },
    {
      title: "How flexible is the scheduling for tutoring sessions?",
      content:
        "We offer flexible scheduling options to accommodate your family's busy schedule. You can choose your preferred days and times, and we will do our best to find a suitable tutor",
    },
    {
      title: "Can sessions be rescheduled or cancelled?",
      content:
        "Yes, sessions can be rescheduled or cancelled with sufficient notice. Please refer to our terms and conditions for the cancellation policy.",
    },
    {
      title: "What happens if my child doesn't get along with the tutor?  ",
      content:
        "If your child is not satisfied with their tutor, we will work to find a suitable replacement. Your child's comfort and satisfaction are our top priority.",
    },
    {
      title: "Is the tutoring curriculum aligned with the school syllabus? ",
      content:
        "  Yes, our tutoring curriculum is aligned with the latest school syllabi. Our tutors are familiar with the specific requirements and expectations of different schools.",
    },
    {
      title: "What technology or software is required for online tutoring? ",
      content:
        "For online tutoring, you will need a reliable internet connection and a device with a camera and microphone (e.g., computer, tablet, or smartphone). We use a secure online platform for our tutoring sessions.",
    },
    {
      title: "Are sessions recorded for later review? ",
      content:
        "It is recommended  sessions are recorded unless explicitly agreed upon by both parties",
    },
    {
      title: "How are learning materials provided to students? ",
      content:
        "Learning materials, such as textbooks, worksheets, and practice tests, can be provided digitally or in physical form, depending on your preference.",
    },
    {
      title: "Can tutoring be customised to fit my child’s learning style? ",
      content:
        "Yes, our tutors can tailor their approach to fit your child's individual learning style. We will work with you to understand your child's strengths and weaknesses and develop a personalised learning plan.",
    },
    {
      title: "What if my child needs help outside of scheduled sessions?  ",
      content:
        "You can contact your child's tutor for additional support or questions outside of scheduled sessions. Our tutors are available to provide assistance as needed.",
    },
  ];

  const studentFaq = [
    {
      title: "How do I log into my online tutoring sessions? ",
      content:
        "You will receive login credentials for our online tutoring platform. Simply follow the instructions provided to access your sessions.",
    },
    {
      title: "Can I choose my tutor, or will one be assigned to me? ",
      content:
        "We will assign a tutor to you based on your subject needs and learning style. However, if you have a preference, please let us know.",
    },
    {
      title:
        "What should I do if I don’t understand something during a session? ",
      content:
        "Don't hesitate to ask your tutor for clarification. They are there to help you understand the material and answer your questions.",
    },
    {
      title: "How do I access additional learning resources? ",
      content:
        "Your tutor will provide you with access to additional learning resources, such as textbooks, worksheets, and practice tests. These resources can be accessed through our online platform or in physical form (for in person tutoring only).",
    },

    {
      title: "Are there any homework or assignments given after sessions?  ",
      content:
        "Your tutor may assign homework or practice exercises to reinforce the concepts learned during the session. What if I miss a tutoring session? If you miss a tutoring session, please notify your tutor as soon as possible. You may be able to reschedule the session or receive a makeup session, depending on availability.",
    },
    {
      title: "Can I ask questions outside of tutoring hours? ",
      content:
        "Yes, you can ask your tutor questions outside of scheduled sessions. They are available to provide support and assistance as needed. How long are the tutoring sessions? Tutoring sessions are typically [length of sessions] long. However, the length of sessions can be customised to meet your specific needs.",
    },
    {
      title: "Can I schedule a session right before an exam? ",
      content:
        "Yes, you can schedule a tutoring session right before an exam to receive last-minute review and support.",
    },
    {
      title: "How can I track my progress over time? ",
      content:
        "Your tutor will provide you with feedback and progress reports to help you track your improvement. You can also use our online platform to access your progress data.",
    },

    {
      title: "Is there a limit to how many sessions I can have per week? ",
      content:
        "The number of sessions you can have per week depends on your individual needs and budget. Please contact our customer support for more information.",
    },
    {
      title: "Can I ask questions outside of tutoring hours? ",
      content:
        "Yes, you can ask your tutor questions outside of scheduled sessions. They are available to provide support and assistance as needed. How long are the tutoring sessions? Tutoring sessions are typically [length of sessions] long. However, the length of sessions can be customised to meet your specific needs.",
    },
    {
      title: "What should I do if I don’t feel challenged enough? ",
      content:
        "If you feel like the tutoring is too easy, please let your tutor know. They can adjust the difficulty level of the lessons to ensure that you are challenged and engaged.",
    },
    {
      title: "Can I switch subjects if I need help in more than one area?  ",
      content:
        "Yes, you can switch subjects if you need assistance in multiple areas. Please let your tutor know, and we will arrange for a tutor who specialises in the subjects you need help with.",
    },

    {
      title:
        "What happens if I have a technical issue during an online session?",
      content:
        "If you encounter a technical issue during an online session, please contact our customer support immediately. We will assist you in resolving the problem.",
    },
    {
      title: "Can I work on projects or assignments during tutoring?",
      content:
        "Yes, you can work on projects or assignments during your tutoring sessions. Your tutor can provide guidance and support as needed.",
    },
    {
      title: "What if I don’t feel comfortable with my tutor? ",
      content:
        "If you are not satisfied with your tutor, please let us know. We will work to find a suitable replacement.",
    },
    {
      title: "Are group study sessions available? ",
      content:
        "We intend to offer one-on-one tutoring,  and will  consider offering group study sessions",
    },
    {
      title: "How can tutoring help me improve my grades? ",
      content:
        "Tutoring can provide you with personalised instruction, support, and guidance to help you improve your understanding of the material and achieve higher grades. Our tutors can help you develop effective study habits, identify areas for improvement, and build confidence in your abilities.",
    },
  ];

  const [currentFaqData, setCurrentFaqData] = useState(parentFaq);

  return (
    <Box maxWidth={{ xl: "1200px" }} marginX="auto" bg="#0A52A8" id="faq">
      <Box
        position="relative"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage="/images/underlay.png"
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        padding={{ base: 5, md: 10, lg: 20 }}
        m={{ base: 5, md: 10, lg: 20 }}
        borderRadius={42}
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
            mt={8}
          />
        </VStack>
        <VStack justifyContent="center">
          <Flex
            bg="white"
            borderRadius={32}
            padding={{ base: 3, lg: 12 }}
            width={{ base: "100%", lg: 672 }}
            mt={{ base: 0, lg: 0 }}
            height="fit-content"
          >
            <Tabs
              onChange={(index) => {
                setCurrentFaqData(index === 0 ? parentFaq : studentFaq);
              }}
            >
              <TabList>
                <Tab fontSize={14} fontWeight={500}>
                  <Text>Parent FAQs</Text>
                </Tab>
                <Tab fontSize={14} fontWeight={500}>
                  <Text>Student FAQs</Text>
                </Tab>
              </TabList>

              <Container>
                <Accordion
                  allowMultiple
                  width="100%"
                  rounded="lg"
                  fontFamily="heading"
                  maxH={"500px"}
                  overflowY={"auto"}
                  sx={{
                    "&::-webkit-scrollbar": {
                      scrollbarWidth: "none",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#888",
                      borderRadius: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      backgroundColor: "#f1f1f1",
                    },
                  }}
                >
                  {currentFaqData.map((item, index) => (
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
                            <AccordionButton
                              borderBottom={isExpanded ? 1 : 0}
                              padding={{ base: 1, sm: 3, md: 5, lg: 5 }}
                            >
                              <Box as="span" flex="1" textAlign="left">
                                <Text
                                  fontSize={{
                                    base: 10,
                                    sm: 12,
                                    md: 14,
                                    lg: 18,
                                  }}
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
                                  fontSize={{
                                    base: 12,
                                    sm: 12,
                                    md: 14,
                                    lg: 18,
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
                                  fontSize={{
                                    base: 12,
                                    sm: 12,
                                    md: 14,
                                    lg: 18,
                                  }}
                                />
                              )}
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text
                              color="#4C4C4D"
                              fontSize={{
                                base: 10,
                                sm: 12,
                                md: 14,
                                lg: 18,
                              }}
                            >
                              {item.content}
                            </Text>
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </Container>
            </Tabs>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
}
