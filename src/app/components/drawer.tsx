"use client";

import {
  VStack,
  Image,
  Link as ChakraLink,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "./ui/button";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
const Drawer = ({ isOpen, onClose }: DrawerProps) => {
  const router = useRouter();
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
  ];
  return (
    <ChakraDrawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent bg="white">
        <DrawerCloseButton
          onClick={onClose}
          position="fixed"
          top={4}
          right={4}
          size="lg"
          color="brand.100"
        />
        <DrawerHeader>
          <Link href="/" onClick={onClose}>
            <ChakraLink width={{ base: "60px" }} height={{ base: "60px" }}>
              <Image src="/images/quik.png" alt="Logo" height="50px" />
            </ChakraLink>
          </Link>
        </DrawerHeader>

        <DrawerBody>
          <VStack spacing={4} align="stretch">
            {navLinks.map((link) => (
              <Link href={link.url} key={link.url}>
                <ChakraLink
                  onClick={onClose}
                  color="brand.300"
                  fontWeight="500"
                  fontSize="17px"
                  _hover={{
                    color: "brand.100",
                  }}
                >
                  {link.title}
                </ChakraLink>
              </Link>
            ))}
          </VStack>
        </DrawerBody>

        <VStack align="flex-start" mb={20} px={6}>
          <Button
            text="Sign in"
            variant="ghost"
            color="brand.300"
            onClick={() => router.push("/login")}
          />
          <Button text="SIGN UP" onClick={() => router.push("/signup")} />
        </VStack>
      </DrawerContent>
    </ChakraDrawer>
  );
};

export default Drawer;
