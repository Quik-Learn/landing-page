"use client";

import {
  VStack,
  Container,
  HStack,
  Link as ChakraLink,
  IconButton,
  Image,
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
      title: "pricing",
      url: "/pricing",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "Login",
      url: "https://app.codemunsta.co/",
    },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <VStack
        // position="fixed"
        // top={0}
        // left={0}
        // right={0}
        // bg="#F9F9F9"
        zIndex={100}
        fontFamily="heading"
      >
        <Container
          maxW={{
            base: "100%",
            md: "100%",
            lg: "100%",
          }}
          maxWidth={{ xl: 1440 }}
          paddingX={{ base: 5, md: 10, lg: 20 }}
        >
          <HStack justify="space-between">
            <Link href="/">
              <ChakraLink width={{ base: "60px" }} h={{ base: "60px" }}>
                <Image
                  src="/images/quik-logo.svg"
                  alt="Logo"
                  width={{ base: 50, lg: 100 }}
                  height={{ base: 50, lg: 100 }}
                />
              </ChakraLink>
            </Link>

            <HStack
              alignItems="flex-end"
              display={{
                base: "none",
                md: "none",
                lg: "flex",
              }}
              width="65%"
              justify="space-between"
              bg="white"
              borderRadius={15}
              px={5}
              boxShadow="5px 5px 18px rgba(0, 0, 0, 0.03)"
            >
              <HStack
                spacing={10}
                display={{
                  base: "none",
                  md: "none",
                  lg: "flex",
                }}
                alignSelf="center"
              >
                {navLinks.map((link) =>
                  link.url === "title" ? (
                    <Button
                      key={link.title}
                      color={"#0065FF"}
                      variant="outline"
                      text={link.title}
                      border="1px solid #0065FF"
                      borderRadius={10}
                      onClick={() =>
                        window.open(
                          "https://app.codemunsta.co/auth/sign-up",
                          "_blank"
                        )
                      }
                      width="132px"
                      fontSize={18}
                      fontWeight={600}
                    />
                  ) : (
                    <Link href={link.url} key={link.title}>
                      <ChakraLink
                        color={pathname === link.url ? "#0065FF" : "black"}
                        fontWeight="400"
                        fontSize="18px"
                        textTransform="capitalize"
                        fontFamily="heading"
                        _hover={{
                          color: "#D7E9FF",
                        }}
                      >
                        {link.title}
                      </ChakraLink>
                    </Link>
                  )
                )}
              </HStack>

              <Button
                bg="#FBA333"
                text="SIGN UP"
                onClick={() =>
                  window.open(
                    "https://app.codemunsta.co/auth/sign-up",
                    "_blank"
                  )
                }
                width="132px"
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
                icon={<IoMenu size={30} />}
                _hover={{
                  bg: "primary",
                }}
                onClick={handleToggle}
              />
            </HStack>
          </HStack>
        </Container>
      </VStack>
      <Drawer isOpen={isOpen} onClose={handleToggle} />
    </>
  );
};

export default NavBar;
