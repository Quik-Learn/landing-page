"use client";

import {
  VStack,
  Container,
  HStack,
  Link as ChakraLink,
  IconButton,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "../../assets/images/quik-logo.svg";
import Button from "./ui/button";
import Drawer from "./drawer";

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
      url: "/#pricing",
    },
    {
      title: "Contact",
      url: "/#contact",
    },
    {
      title: "Login",
      url: "/login",
    },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <VStack
        py={2}
        position="fixed"
        top={0}
        left={0}
        right={0}
        bg="#F9F9F9"
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
          paddingX={20}
        >
          <HStack justify="space-between">
            <Link href="/">
              <ChakraLink>
                <Image src={Logo} alt="Logo" width={100} height={100} />
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
                {navLinks.map((link) => (
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
                ))}
              </HStack>

              <Button
                bg="#FBA333"
                text="SIGN UP"
                onClick={() => router.push("/signup")}
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
                color="white"
                icon={
                  <Image
                    src="/images/biology.svg"
                    width={50}
                    height={50}
                    alt="menu"
                  />
                }
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
