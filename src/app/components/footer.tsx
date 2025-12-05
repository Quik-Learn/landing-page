"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Link as ChakraLink,
  HStack,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";

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
      { label: "Explore Courses", href: "#courses" },
      { label: "Benefits", href: "#benefits" },
      { label: "Pricing", href: "#pricing" },
      { label: "Our Testimonials", href: "#testimonials" },
      { label: "Our FAQ", href: "#faq" },
    ],
  },
  {
    header: "About Us",
    links: [
      { label: "Company", href: "/about-us" },
      { label: "Achievements", href: "/about-us" },
      { label: "Our Goals", href: "/about-us" },
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
        label: "enquiries@quiklearn.co.uk",
        href: "mailto:enquiries@quiklearn.co.uk",
        icon: <IoMdMail color="#fff" />,
      },
      {
        label: "+44 3300435657",
        href: "tel:+443300435657",
        name: "Customer Support",
        icon: <IoCall color="#fff" />,
      },
      {
        label:
          "Interchange Business Centre, Howard Way, Newport Pagnell, MK16 9PY",
        href: "https://maps.google.com/?q=Interchange+Business+Centre,+Howard+Way,+Newport+Pagnell,+MK16+9PY",
        icon: <RiMapPin2Fill color="#fff" />,
      },
    ],
  },
];

export default function Footerr() {
  const year = new Date().getFullYear();
  return (
    <Box bg="black" color="white">
      <Stack
        maxW={"1440px"}
        py={2}
        marginX={"auto"}
        padding={{ base: 5, md: 10, lg: 10 }}
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
          justifyContent="space-between"
        >
          <Stack spacing={{ base: 3, lg: 4 }}>
            <Box mt={6} ml={{ base: 0, md: 20 }}>
              <Link href="/">
                <ChakraLink display={"block"} w={100} h={100}>
                  <Image
                    src="/images/quik.png"
                    alt="Logo"
                    width={"100%"}
                    height={"100%"}
                  />
                </ChakraLink>
              </Link>
            </Box>
            {footerData[3].links?.map((item: any, index) => (
              <HStack
                key={index}
                as="a"
                href={item.href}
                target={
                  item.href.includes("maps.google.com") ? "_blank" : undefined
                }
                rel={
                  item.href.includes("maps.google.com")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <IconButton
                  aria-label={item.label}
                  icon={item.icon}
                  bg="transparent"
                />
                <Text> {item.label}</Text>
                {item.name && <Text>- {item.name}</Text>}
              </HStack>
            ))}
          </Stack>

          {footerData.slice(0, 2).map((section, index) => (
            <Stack
              key={index}
              align={"flex-start"}
              pt={{ lg: 6 }}
              spacing={{ base: 3, lg: 4 }}
            >
              <ListHeader>{section.header}</ListHeader>
              {section.links?.map((link, linkIndex) => (
                <Box key={linkIndex} as="a" href={link.href}>
                  {link.label}
                </Box>
              ))}
            </Stack>
          ))}

          <Stack
            align={"flex-start"}
            pt={{ lg: 4 }}
            spacing={{ base: 3, lg: 4 }}
          >
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
        <Stack
          borderTopWidth={2}
          borderColor="white"
          py={{ base: 10, md: 6 }}
          mt={6}
        >
          <Text fontSize={"sm"} textAlign="center">
            © {year} DBN HEAD HUNTERS LTD. All rights reserved
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}
