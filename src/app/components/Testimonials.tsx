"use client";

import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Rating({ rating }: any) {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "#E9AB2B" : "#fff"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "#E9AB2B" : "#fff"}
              />
            );
          }
          return (
            <BsStar
              key={i}
              style={{ marginLeft: "1" }}
              color={i < rating ? "#E9AB2B" : "#E9AB2B"}
            />
          );
        })}
    </Box>
  );
}

export default function CaptionCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const cards = [
    {
      title: "James Seams",
      text: "“Wasn’t expecting much when I registered, but I am pleasantly surprised with the improvements my child has made.”",
      image: "/images/comment.svg",
      remark: "Parent",
      rating: 4,
    },
    {
      title: "Jessica Mila",
      text: "“From parents thrilled with their child's growth to students achieving their academic milestones,”",
      image: "/images/comment.svg",
      remark: "Good Teacher",
      rating: 3.5,
    },
    {
      title: "Fransiska Reyxo",
      text: "“From parents thrilled with their child's growth to students achieving their academic milestones,”",
      image: "/images/comment.svg",
      remark: "Good Teacher",
      rating: 1,
    },
    {
      title: "Gideon Ronaldo",
      text: "“From parents thrilled with their child's growth to students achieving their academic milestones,”",
      image: "/images/comment.svg",
      remark: "Good Teacher",
      rating: 4,
    },
    {
      title: "John Mila",
      text: "“From parents thrilled with their child's growth to students achieving their academic milestones,”",
      image: "/images/comment.svg",
      remark: "Good Teacher",
      rating: 3.5,
    },
    {
      title: "Tamar Reyxo",
      text: "“From parents thrilled with their child's growth to students achieving their academic milestones,”",
      image: "/images/comment.svg",
      remark: "Good Teacher",
      rating: 5,
    },
  ];
  const CustomDot = ({ onClick, ...rest }: any) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    const carouselItems = cards.map((item) => item.title);
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <>
        <Box
          as="button"
          id={index}
          width="18px"
          height="18px"
          onClick={() => onClick()}
          borderRadius="full"
          backgroundColor={active ? "#FF8C00" : "#D9D9D9"}
          marginX="5px"
          _hover={{ backgroundColor: "#FF8C00" }}
          _active={{ backgroundColor: "#FF8C00" }}
        />
      </>
    );
  };

  return (
    <Box
      py={{ lg: 40 }}
      fontFamily="heading"
      bg="#FFF1F8"
      padding={{ base: 10, lg: 20 }}
    >
      <VStack spacing={2} textAlign="center" pt={5} pb={20}>
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
          Testimonials of Academic Excellence
        </Heading>
        <Text color="#949494" textAlign="center">
          From state-of-the-art facilities to innovative teaching methodologies,
          we strive to empower students with the knowledge, skills, and values
          they need to thrive in an ever-evolving world.
        </Text>
      </VStack>
      <Stack
        position="relative"
        maxWidth={{ xl: 1440 }}
        height={{ base: "60vh", sm: "70vh", md: "60vh", lg: "65vh" }}
        pt={10}
      >
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          renderDotsOutside={true}
          customDot={<CustomDot />}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          arrows={false}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
        >
          {cards.map((card, index) => (
            <Box
              as="div"
              display="flex"
              flexDir="column"
              key={index}
              padding={0}
              marginRight={{ md: 10 }}
              alignSelf="center"
              paddingBottom={10}
            >
              <Stack
                spacing={6}
                bg="white"
                borderRadius={19}
                padding={12}
                mt={10}
                position="relative"
              >
                <Image
                  src={card.image}
                  alt="avi"
                  w="50px"
                  h="50px"
                  borderRadius="full"
                  position="absolute"
                  top="-50px"
                  left="50%"
                  transform="translate(-50%, 50%)"
                  bg="#D9D9D9"
                />
                <Image
                  src="/images/top.svg"
                  alt="top"
                  w="50px"
                  h="50px"
                  borderRadius="full"
                  position="absolute"
                  top="-25px"
                  left="0px"
                />
                <Image
                  src="/images/bottom.svg"
                  alt="bottom"
                  w="50px"
                  h="50px"
                  borderRadius="full"
                  position="absolute"
                  right="0px"
                  bottom="-25px"
                />
                <Text
                  fontSize={{ base: "12px", md: "17px", lg: "17px" }}
                  color="#ACACAC"
                  fontFamily="heading"
                  textAlign="center"
                >
                  {card.text}
                </Text>
                <Rating rating={card.rating} />
              </Stack>
              <Stack
                spacing={2}
                marginTop={10}
                justifyContent="center"
                display="flex"
                alignItems="center"
              >
                <Text
                  fontSize={{ base: "21px", md: "21px", lg: "21px" }}
                  color="#1C1C1C"
                  fontWeight={800}
                  fontFamily="heading"
                >
                  {card.title}
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "14px", lg: "14px" }}
                  color="#0A52A8"
                  fontFamily="heading"
                >
                  {card.remark}
                </Text>
              </Stack>
            </Box>
          ))}
        </Carousel>
      </Stack>
    </Box>
  );
}
