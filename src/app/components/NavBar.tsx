"use client";

import {
  VStack,
  Container,
  HStack,
  Link as ChakraLink,
  IconButton,
  Image,
  Stack,
  Box,
} from "@chakra-ui/react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import Button from "./ui/button";
import Drawer from "./drawer";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Courses",
      url: "/courses",
    },
    {
      title: "About Us",
      url: "/about-us",
    },
    {
      title: "Resources",
      url: "/resources",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    // {
    //   title: "Login",
    //   url: "home.quiklearn.co.uk",
    // },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <VStack
        maxWidth={"1440px"}
        marginX={"auto"}
        marginTop={22}
        zIndex={100}
        fontFamily="heading"
        paddingX={{ base: 5, md: 10, lg: 20 }}
      >
        <HStack justify="space-between" width={"full"} alignItems={"center"}>
          <Link href="/">
            <Box w="80px" h="80px" display={"block"}>
              <Image
                src="/images/quik.png"
                alt="Logo"
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </Link>

          <HStack
            alignItems="flex-end"
            display={{
              base: "none",
              md: "none",
              lg: "flex",
            }}
            justify="space-between"
            bg="white"
            borderRadius={15}
            gap={10}
            paddingY={2}
            paddingX={4}
            boxShadow="5px 5px 18px rgba(0, 0, 0, 0.03)"
          >
            <HStack
              gap={10}
              display={{
                base: "none",
                md: "none",
                lg: "flex",
              }}
              alignSelf="center"
            >
              {navLinks.map((link) => (
                <ChakraLink
                  key={link.title}
                  asChild
                  color={pathname === link.url ? "#0065FF" : "black"}
                  fontWeight="400"
                  fontSize="16px"
                  textTransform="capitalize"
                  fontFamily="heading"
                  _hover={{ color: "#D7E9FF" }}
                >
                  <Link href={link.url}>{link.title}</Link>
                </ChakraLink>
              ))}
            </HStack>
            <Button
              border="#0A52A8"
              text="Login"
              onClick={() =>
                window.open("https://home.quiklearn.co.uk", "_blank")
              }
              width="122px"
              fontSize={18}
              color="#0A52A8"
              fontWeight={600}
              variant="outline"
            />
            <Button
              bg="#FBA333"
              text="SIGN UP"
              onClick={() =>
                window.open(
                  "https://home.quiklearn.co.uk/auth/sign-up",
                  "_blank",
                )
              }
              width="122px"
              fontSize={18}
              color="#F5F5F5"
              fontWeight={600}
            />
          </HStack>

          <HStack
            alignItems="flex-end"
            display={{
              base: "flex",
              md: "flex",
              lg: "none",
            }}
          >
            <IconButton
              aria-label="toggle navigation"
              bg="primary"
              color="#FBA333"
              _hover={{
                bg: "primary",
              }}
              onClick={handleToggle}
            >
              <IoMenu size={30} />
            </IconButton>
          </HStack>
        </HStack>
      </VStack>
      <Drawer isOpen={isOpen} onClose={handleToggle} />
    </>
  );
};

export default NavBar;
