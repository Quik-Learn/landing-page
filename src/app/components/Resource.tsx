"use client";

import {
  Box,
  Button,
  SimpleGrid,
  Tag,
  Image,
  Text,
  GridItem,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Resource = () => {
  // Dummy Data
  const data = new Array(18).fill({
    title: "Our Goals",
    description:
      "At QuickLearn, our goal is to empower individuals from all backgrounds to thrive in the world of design and",
    imageUrl: "images/baby.svg",
    label: "Education",
  });
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleClick = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getGridSpans = (index: number) => {
    switch (index) {
      case 0:
        return { colSpan: 3, rowSpan: 2 };
      case 1:
        return { colSpan: 1, rowSpan: 2 };
      case 2:
        return { colSpan: 2, rowSpan: 2 };
      case 3:
        return { colSpan: 2, rowSpan: 2 };
      case 4:
        return { colSpan: 2, rowSpan: 1 };
      case 5:
        return { colSpan: 2, rowSpan: 2 };
      case 6:
        return { colSpan: 2, rowSpan: 1 };
      case 7:
        return { colSpan: 1, rowSpan: 2 };
      case 8:
        return { colSpan: 3, rowSpan: 2 };
      default:
        return { colSpan: 1, rowSpan: 1 };
    }
  };

  return (
    <Box p={5} padding={20}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} gap={5}>
        {paginatedData.map((item, index) => {
          const { colSpan, rowSpan } = getGridSpans(index);
          return (
            <GridItem
              key={index}
              colSpan={colSpan} // Adjusts width based on position
              rowSpan={rowSpan} // Adjusts height based on position
              h={rowSpan === 2 ? "500" : "240"}
            >
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bg="white"
                h={rowSpan === 2 ? "500" : "240"}
                position={"relative"}
              >
                <Stack w={"100%"} h={"100%"}>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  />
                </Stack>
                <Box
                  p="6"
                  position={"absolute"}
                  zIndex={1}
                  left={0}
                  bottom={0}
                  bgGradient="linear(to-t, rgba(104, 104, 104, 1), rgba(175, 175, 175, 0.2))"
                  width="100%" // Ensure content is aligned with the box
                  height="50%"
                  alignItems={"flex-start"}
                  justifyContent={"flex-end"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  {rowSpan === 2 ? (
                    <>
                      <Text
                        fontWeight="bold"
                        fontSize={rowSpan === 2 ? "55px" : "48px"}
                        mb="2"
                        color={"white"}
                      >
                        {item.title}
                      </Text>
                      <Text
                        mb="4"
                        fontSize={rowSpan !== 2 ? "24px" : "18px"}
                        color={"white"}
                      >
                        {item.description}
                      </Text>
                    </>
                  ) : null}
                  <Button
                    color={"white"}
                    bg={index % 2 ? "#0065FF" : "#FF8C00"}
                  >
                    {item.label}{" "}
                  </Button>
                </Box>
              </Box>
            </GridItem>
          );
        })}
      </SimpleGrid>

      <Box mt={4} display="flex" justifyContent="center">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => handleClick(index + 1)}
            mx={1}
            colorScheme={currentPage === index + 1 ? "blue" : "gray"}
          >
            {index + 1}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Resource;
