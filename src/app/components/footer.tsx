"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Link as ChakraLink,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Logo from "../../assets/images/quik-logo.svg";
import Link from "next/link";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { RiMapPin2Fill } from "react-icons/ri";
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="white"
      //   rounded={"full"}
      borderRadius={6}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "#D7E9FF",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

// Define footer content as arrays
const footerData = [
  {
    header: "Home",
    links: [
      { label: "Explore Courses", href: "#" },
      { label: "Benefits", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Our Testimonials", href: "#" },
      { label: "Our FAQ", href: "#" },
    ],
  },
  {
    header: "About Us",
    links: [
      { label: "Company", href: "#" },
      { label: "Achievements", href: "#" },
      { label: "Our Goals", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    header: "Stay up to date",
    socialLinks: [
      { label: "Facebook", href: "#", icon: FaFacebook },
      { label: "Twitter", href: "#", icon: FaTwitter },
      { label: "Instagram", href: "#", icon: FaInstagram },
    ],
  },
  {
    header: "",
    links: [
      {
        label: "hello@example.com",
        href: "#",
        icon: <IoMdMail color="#fff" />,
      },
      { label: "+91 91813 23 2309", href: "#", icon: <IoCall color="#fff" /> },
      {
        label: "Somewhere in the World",
        href: "#",
        icon: <RiMapPin2Fill color="#fff" />,
      },
    ],
  },
];

export default function Footerr() {
  const year = new Date().getFullYear();
  return (
    <Box bg="black" color="white">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Link href="/">
                <ChakraLink>
                  <Image src={Logo} alt="Logo" width={100} height={100} />
                </ChakraLink>
              </Link>
            </Box>
            {footerData[3].links?.map((item: any, index) => (
              <HStack key={index} as="a" href={item.href}>
                <IconButton
                  aria-label={item.label}
                  icon={item.icon}
                  bg="transparent"
                />
                <Text> {item.label}</Text>
              </HStack>
            ))}
          </Stack>

          {footerData.slice(0, 2).map((section, index) => (
            <Stack key={index} align={"flex-start"}>
              <ListHeader>{section.header}</ListHeader>
              {section.links?.map((link, linkIndex) => (
                <Box key={linkIndex} as="a" href={link.href}>
                  {link.label}
                </Box>
              ))}
            </Stack>
          ))}

          <Stack align={"flex-start"}>
            <ListHeader>{footerData[2].header}</ListHeader>
            <Stack direction={"row"} spacing={6}>
              {footerData[2].socialLinks?.map((socialLink, socialIndex) => (
                <SocialButton
                  key={socialIndex}
                  label={socialLink.label}
                  href={socialLink.href}
                >
                  <socialLink.icon color="black" />
                </SocialButton>
              ))}
            </Stack>
          </Stack>
        </SimpleGrid>
        <Stack borderTopWidth={2} borderColor="white" py={10} mt={10}>
          <Text fontSize={"sm"} textAlign="center">
            © {year} example. All rights reserved
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
