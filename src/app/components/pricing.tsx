"use client";

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  Button,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { pricingData } from "../utils/data";
import { PriceWrapperProps } from "../types";
import { LiaWindowCloseSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { useState } from "react";
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
      w={{ base: "100%", md: "350px", lg: "408px" }}
    >
      {children}
    </Box>
  );
}
export default function Pricing() {
  const [loading, setLoading] = useState(false);

  const getPricing = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://backend.quiklearn.co.uk/finance/plans/all/"
      );
      const data = await res.json();
      console.log("pricing data", data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box bg="#F9F9F9" id="pricing">
        <Box
          py={{ lg: 70 }}
          maxWidth={{ xl: 1440 }}
          marginX="auto"
          fontFamily="heading"
          padding={{ base: 5, md: 10, lg: 20 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <VStack gap={2} textAlign="center" pt={5} pb={{ base: 10, lg: 20 }}>
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
              <Text color="black" textAlign="center" w={{ md: "50%" }}>
                Transparent pricing for quality education. Choose the plan that
                suits your needs and start your academic journey.
              </Text>
            </VStack>
          </motion.div>
        
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          gap={10}
          alignItems="center"
        >
          {pricingData.map((tier, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.4, 
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <PriceWrapper bgColor={tier.bgColor}>
                <Box position="relative" color={tier.textColor}>
                  
                  <Box
                    py={4}
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                  >
                    <Text
                      fontWeight="700"
                      fontSize={{ base: 24, sm: 28, md: 35, lg: 40 }}
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
                        fontSize={{ base: 18, sm: 22, md: 28, lg: 31 }}
                        fontWeight="600"
                        color="#0A52A8"
                        fontFamily="Inter"
                      >
                        {tier.price}
                      </Text>
                      <Text
                        fontSize={{ base: 14, sm: 14, md: 16, lg: 16 }}
                        color="black"
                        fontFamily="heading"
                      >
                        {tier.period}
                      </Text>
                    </HStack>
                  </Box>
                  <VStack py={6} borderBottomRadius={"xl"}>
                    <Text
                      fontWeight="500"
                      fontSize={{ base: 14, sm: 14, md: 16, lg: 16 }}
                      textAlign="start"
                      fontFamily="heading"
                      display="flex"
                    >
                      Available Features
                    </Text>
                    <List.Root gap={3} textAlign="start" px={12}>
                      {tier.features.map((feature, idx) => (
                        <ListItem
                          key={idx}
                          fontFamily="heading"
                          fontSize={{ base: 12, sm: 12, md: 14, lg: 18 }}
                        >
                          <Icon
                            as={
                              feature.available
                                ? IoMdCheckmark
                                : LiaWindowCloseSolid
                            }
                            bg={feature.available ? "#FFD599" : "transparent"}
                            color="#000"
                            fontSize={{ base: 12, sm: 12, md: 14, lg: 18 }}
                          />
                          {feature.feature}
                        </ListItem>
                      ))}
                    </List.Root>
                    <Box w="80%" pt={7}>
                      <Button
                        w="full"
                        mb={4}
                        bg={tier.buttonColorScheme}
                        color={tier.buttonText}
                        onClick={() =>
                          window.open("https://home.quiklearn.co.uk/", "_blank")
                        }
                        variant={tier.buttonVariant || "solid"}
                      >
                        Get Started
                      </Button>
                    </Box>
                  </VStack>
                </Box>
              </PriceWrapper>
              </motion.div>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
    </motion.div>
  );
}
