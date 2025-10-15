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
      title: "Emily R",
      text: "“ I'm so impressed with the quality of education my child receives from Quik Learn. The interactive lessons are both fun and informative, and the progress tracking feature helps me stay on top of their development. Thank you for providing an exceptional learning experience!”",
      image: "/images/comment.svg",
      remark: "Excellent",
      rating: 4,
    },
    {
      title: "David K.",
      text: "“Quik Learn has been a game-changer for my child's education. The website is easy to navigate, and the lessons are tailored to their individual needs. I've seen significant improvement in their reading and math skills, and I couldn't be happier!”",
      image: "/svg/img1.svg",
      remark: "Satisfactory",
      rating: 3.5,
    },
    {
      title: "Sarah T",
      text: "I was hesitant to try online learning, but Quik Learn has exceeded my expectations. The engaging activities and quizzes have made learning fun for my child, and the customer support team is always available to help. I highly recommend Quik Learn to any parent looking for a quality online education.”",
      image: "/svg/img2.svg",
      remark: "Good Choice!",
      rating: 5,
    },
    {
      title: "Mark S.",
      text: "My child was struggling in school, but since starting with Quik Learn, I've seen a significant boost in their confidence and academic performance. The personalized learning plans and regular progress updates have been invaluable in helping me support their education. Thank you, Quik Learn !”",
      image: "/svg/img3.svg",
      remark: "Great Teacher",
      rating: 5,
    },
    {
      title: "Rachel G.",
      text: "“I love how Quik Learn makes learning fun and interactive! The website is easy to use, and the lessons are tailored to my child's individual needs. I've seen significant improvement in their literacy and numeracy skills, and I'm confident that Quik Learn will continue to support their educational journey.”",
      image: "/svg/img4.svg",
      remark: "Excellent",
      rating: 4.5,
    },
    {
      title: "Dav A.",
      text: "“Quik Learn has been a game-changer for my child's education. The website is easy to navigate, and the lessons are tailored to their individual needs. I've seen significant improvement in their reading and math skills, and I couldn't be happier!”",
      image: "/svg/img6.svg",
      remark: "Satisfactory",
      rating: 3.5,
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
    <Box bg="#FFF1F8" id="testimonials">
      <Box
        py={{ lg: 40 }}
        fontFamily="heading"
        maxWidth={{ xl: 1440 }}
        marginX="auto"
        padding={{ base: 10, lg: 20 }}
      >
        <VStack spacing={2} textAlign="center" pt={2} pb={12}>
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
          <Text
            color="#949494"
            textAlign="center"
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
          >
            From state-of-the-art facilities to innovative teaching
            methodologies, we strive to empower students with the knowledge,
            skills, and values they need to thrive in an ever-evolving world.
          </Text>
        </VStack>
        <Stack position="relative" maxWidth={{ xl: 1440 }}>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            renderDotsOutside={true}
            customDot={<CustomDot />}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
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
                paddingBottom={20}
                height={"500px"}
                maxHeight={"500px"}
              >
                <Stack
                  spacing={6}
                  bg="white"
                  borderRadius={19}
                  padding={12}
                  mt={10}
                  position="relative"
                  height={"400px"}
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
                    fontSize={{ base: "12px", md: "14px", lg: "15px" }}
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
    </Box>
  );
}
