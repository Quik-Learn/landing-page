"use client";

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { pricingData } from "../utils/data";
import { PriceWrapperProps } from "../types";
import { LiaWindowCloseSolid } from "react-icons/lia";
interface Props {
  children: React.ReactNode;
}

function PriceWrapper({ children, bgColor }: PriceWrapperProps) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderRadius={"xl"}
      bg={bgColor}
      borderColor={bgColor}
      display="flex"
      flexDirection="column"
      w={{ base: "90vw", md: "350px", lg: "438px" }}
    >
      {children}
    </Box>
  );
}
export default function Pricing() {
  const borderColor = useColorModeValue("gray.200", "gray.500");
  const basicBgColor = useColorModeValue("gray.100", "gray.700");
  const standardBgColor = useColorModeValue("orange.300", "orange.700");
  const premiumBgColor = useColorModeValue("gray.100", "gray.700");
  const listBgColor = useColorModeValue("gray.50", "gray.700");
  const popularLabelBgColor = useColorModeValue("blue.500", "blue.700");
  const popularLabelTextColor = useColorModeValue("gray.900", "gray.300");

  return (
    <Box
      py={{ lg: 70 }}
      fontFamily="heading"
      bg="#F9F9F9"
      padding={{ base: 5, md: 10, lg: 20 }}
    >
      <VStack spacing={2} textAlign="center" pt={5} pb={{ base: 10, lg: 20 }}>
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
          Our Pricing
        </Heading>
        <Text color="black" textAlign="center">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
        </Text>
      </VStack>
      {/* <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      > */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        spacing={10}
        alignItems="center"
      >
        {pricingData.map((tier, index) => {
          return (
            <PriceWrapper key={index} bgColor={tier.bgColor}>
              <Box position="relative" color={tier.textColor}>
                {/* {tier.isPopular && (
                  <Box
                    position="absolute"
                    top="-16px"
                    left="50%"
                    style={{ transform: "translate(-50%)" }}
                  >
                    <Text
                      textTransform="uppercase"
                      bg={popularLabelBgColor}
                      px={3}
                      py={1}
                      color={popularLabelTextColor}
                      fontSize="sm"
                      fontWeight="600"
                      rounded="xl"
                    >
                      Most Popular
                    </Text>
                  </Box>
                )} */}
                <Box
                  py={4}
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                >
                  <Text
                    fontWeight="700"
                    fontSize="40px"
                    my={3}
                    fontFamily="heading"
                  >
                    {tier.title}
                  </Text>
                  <HStack
                    justifyContent="center"
                    bg="#FFFBE9"
                    w={130}
                    height={47}
                    borderRadius={7}
                    borderWidth={0.5}
                    borderColor="#FBA333"
                  >
                    <Text
                      fontSize="31px"
                      fontWeight="600"
                      color="#0A52A8"
                      fontFamily="Inter"
                    >
                      {tier.price}
                    </Text>
                    <Text fontSize="16px" color="black" fontFamily="heading">
                      {tier.period}
                    </Text>
                  </HStack>
                </Box>
                <VStack py={4} borderBottomRadius={"xl"}>
                  <Text
                    fontWeight="500"
                    fontSize={16}
                    textAlign="start"
                    fontFamily="heading"
                    display="flex"
                  >
                    Available Features
                  </Text>
                  <List spacing={3} textAlign="start" px={12}>
                    {tier.features.map((feature, idx) => (
                      <ListItem key={idx} fontFamily="heading">
                        <ListIcon
                          as={
                            feature.available
                              ? IoMdCheckmark
                              : LiaWindowCloseSolid
                          }
                          bg={feature.available ? "#FFD599" : "transparent"}
                          color="#000"
                        />
                        {feature.feature}
                      </ListItem>
                    ))}
                  </List>
                  <Box w="80%" pt={7}>
                    <Button
                      w="full"
                      bg={tier.buttonColorScheme}
                      color={tier.buttonText}
                      variant={tier.buttonVariant || "solid"}
                    >
                      Get Started
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </PriceWrapper>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
