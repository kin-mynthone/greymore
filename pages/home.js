import {
  Box,
  Flex,
  IconButton,
  Text,
  Spacer,
  Image,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import "@fontsource/baskervville";
import { MotionButton, MotionFlex } from "../constants/components/motion";
import { chakra } from "@chakra-ui/react";

import { startUpStore } from "../store/start_up";
import { useState, useEffect } from "react";

import { useWindowSize } from "../custom_hooks";

import "@fontsource/poppins";
export default function Home() {
  const setshowStartup = startUpStore((state) => state.set_show_startup);

  useEffect(() => {
    setshowStartup(false);
  });
  const { height, width } = useWindowSize();

  function CallToAction() {
    return (
      <Flex
        flexDir={["row", "column", "row", "row", "row", "row"]}
        height={["60vh", "30vh", "30vh", "30vh", "80vh", "80vh"]}
        bgColor={"#16365F"}
        alignItems={"end"}
        justifyContent={"start"}
      >
        <Image
          src={
            "https://images.unsplash.com/photo-1644952354935-0bc0d25a9996?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          }
          alt="greymore"
          objectFit={"cover"}
          boxSize={"full"}
        />{" "}
        <Box
          position={"absolute"}
          boxSize="full"
          objectFit="cover"
          left={0}
          bgColor={"rgba(51, 51, 51, 0.8) "}
        ></Box>
        <VStack
          position={"absolute"}
          px={"5%"}
          alignSelf={"end"}
          alignItems={"start"}
          pb={["50px", "100px", "100px", "100px", "100px", "100px"]}
        >
          <VStack spacing={[-2, -6, -6, -6, -5, -6]} alignItems={"start"}>
            <chakra.h3
              fontFamily={"Poppins.black"}
              fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#FFFFFF"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {`Payment Solution for `}
            </chakra.h3>

            <HStack>
              <chakra.h3
                fontFamily={"Poppins.black"}
                fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#FFFFFF"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`Dynamic `}
              </chakra.h3>
              <chakra.h3
                fontFamily={"Poppins.black"}
                fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#EAD8A2"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`Businesses`}
              </chakra.h3>
            </HStack>
          </VStack>

          <chakra.p
            fontSize={["14px", "14px", "15px", "15px", "20px", "18px"]}
            color="#FFFFFF"
            fontWeight={"thin"}
            maxW={["90%", "70%", "70%", "70%", "70%", "70%"]}
            whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            letterSpacing={{ base: "normal", md: "2px" }}
            fontFamily={"Poppins"}
          >
            {`Providing innovative payment solutions to help merchants accept or disburse payments online. We focus on alternative payment channels such as banks, mobile payments, ATM’s, Crypto and brick-and-mortar payment centers. By doing so, we provide our merchants convenience, better protection against fraud, and low transaction fees.`}
          </chakra.p>
        </VStack>
      </Flex>
    );
  }

  function Payment() {
    return (
      <VStack
        alignItems={"center"}
        bgColor={"#fff"}
        spacing={10}
        height={["130vh", "30vh", "30vh", "30vh", "130vh", "130vh"]}
        w={width}
      >
        <Flex
          flexDir={["column", "column", "row", "row", "row", "row"]}
          alignItems={"end"}
          justifyContent={"end"}
          objectFit={"cover"}
          bgImage={"bgmap.png"}
          height={["100vh", "30vh", "30vh", "30vh", "100vh", "100vh"]}
          w={width}
        >
          <Flex
            alignItems={"start"}
            justifyContent={"start"}
            pt={["40", "10", "10", "10", "40", "40"]}
            pl={["10", "10", "10", "10", "40", "20"]}
            pb={["10", "10", "10", "10", "10", "10"]}
            w={["100%", "60%", "60%", "60%", "80%", "80%"]}
            mb={"100px"}
            flexDir={["column", "column", "row", "row", "row", "row"]}
            bgColor="rgba(33, 33, 33, 0.8)"
          >
            <VStack alignItems={"start"}>
              <VStack alignItems={"start"} spacing={-3}>
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "45px", "50px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  id={"STAT"}
                  color="#FFFFFF"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`Accept payments in 28 `}
                </chakra.h3>
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "45px", "50px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  id={"STAT"}
                  color="#FFFFFF"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`currencies from users`}
                </chakra.h3>
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "45px", "50px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  id={"STAT"}
                  color="#EAD8A2"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`around the world.`}
                </chakra.h3>
              </VStack>
              <Text
                fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                color="#FFFFFF"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                fontFamily={"Poppins"}
                textAlign={"start"}
                maxW={["100%", "70%", "70%", "70%", "70%", "70%"]}
                letterSpacing={{ base: "normal", md: "1px" }}
              >
                {`AED, AUD, BGN, CAD, CHF, CZK, DKK, EUR, GBP, HKD, HRK, HUF, ILS, JPY, MXN, NOK, NZD, PLN, RUB, QAR, RON, SAR, SEK, SGD, THB, TRY, USD, ZAR.`}
              </Text>
            </VStack>
          </Flex>
        </Flex>
        <SimpleGrid
          alignItems={"center"}
          justifyContent={"center"}
          spacingX={"100px"}
          spacingY={"50px"}
          w={"80%"}
          columns={[1, 1, 1, 1, 4, 4]}
        >
          <HStack spacing={5} alignItems={"center"}>
            <Image
              w={["70px", "200px", "200px", "200px", "60px", "70px"]}
              h={["70px", "200px", "200px", "200px", "60px", "70px"]}
              src={"coins.svg"}
              alt="ms"
            />
            <Text
              fontSize={["14px", "14px", "15px", "15px", "18px", "20px"]}
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
              textAlign={"start"}
            >
              OTC
            </Text>
          </HStack>
          <HStack spacing={5} alignItems={"center"}>
            <Image
              w={["70px", "200px", "200px", "200px", "60px", "70px"]}
              h={["70px", "200px", "200px", "200px", "60px", "70px"]}
              src={"pie.svg"}
              alt="ms"
            />
            <Text
              fontSize={["14px", "14px", "15px", "15px", "18px", "20px"]}
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
              textAlign={"start"}
            >
              Investments
            </Text>
          </HStack>
          <HStack spacing={5} alignItems={"center"}>
            <Image
              w={["70px", "200px", "200px", "200px", "60px", "70px"]}
              h={["70px", "200px", "200px", "200px", "60px", "70px"]}
              src={"wallet.svg"}
              alt="ms"
            />
            <Text
              fontSize={["14px", "14px", "15px", "15px", "18px", "20px"]}
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
              textAlign={"start"}
            >
              Payment settlements
            </Text>
          </HStack>
          <HStack spacing={5} alignItems={"center"}>
            <Image
              w={["70px", "200px", "200px", "200px", "60px", "70px"]}
              h={["70px", "200px", "200px", "200px", "60px", "70px"]}
              src={"shield.svg"}
              alt="ms"
            />
            <Text
              fontSize={["14px", "14px", "15px", "15px", "18px", "20px"]}
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
              textAlign={"start"}
            >
              FinTech
            </Text>
          </HStack>
        </SimpleGrid>
      </VStack>
    );
  }

  function Integrate() {
    return (
      <Flex
        flexDir={["row", "column", "row", "row", "row", "row"]}
        height={["60vh", "30vh", "30vh", "30vh", "80vh", "100vh"]}
        bgColor={"#16365F"}
        alignItems={"end"}
        justifyContent={"start"}
      >
        <Box
          w={width}
          filter={"auto"}
          brightness={"40%"}
          height={["60vh", "30vh", "30vh", "30vh", "80vh", "100vh"]}
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            alt="greymore"
            objectFit={"cover"}
            boxSize={"full"}
          />
        </Box>
        <VStack
          position={"absolute"}
          px={"5%"}
          alignSelf={"end"}
          alignItems={"start"}
          pb={["50px", "100px", "100px", "100px", "100px", "100px"]}
        >
          <VStack spacing={[-2, -6, -6, -6, -5, -6]} alignItems={"start"}>
            <chakra.h3
              fontFamily={"Poppins.black"}
              fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#FFFFFF"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {`Integrate Our Payment `}
            </chakra.h3>

            <Flex
              flexDir={["column", "column", "column", "column", "row", "row"]}
            >
              <chakra.h3
                fontFamily={"Poppins.black"}
                fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#FFFFFF"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`Solutions With `}
              </chakra.h3>
              <chakra.h3
                pl={[0, 0, 0, 0, 5, 5]}
                fontFamily={"Poppins.black"}
                fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#EAD8A2"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`Your Business`}
              </chakra.h3>
            </Flex>
          </VStack>

          <chakra.p
            fontSize={["14px", "14px", "15px", "15px", "20px", "18px"]}
            color="#FFFFFF"
            fontWeight={"thin"}
            maxW={["90%", "70%", "70%", "70%", "70%", "70%"]}
            whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            letterSpacing={{ base: "normal", md: "2px" }}
            fontFamily={"Poppins"}
          >
            {`Whatever kind of business you’re in, if taking online or in-person payments by credit and debit card would help, get in touch to find out how we can help. You’ll find us professional but approachable, as we’re all as committed and excited by our business as you are of yours. We never stop working on all our customers’ behalf, whether they’re large or small, because it’s making businesses more successful that drives us in everything we do.`}
          </chakra.p>
        </VStack>
      </Flex>
    );
  }

  return (
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 100, delay: 1 }}
      transition={{ ease: "easeIn", duration: 10, delay: 1 }}
    >
      <Box bgColor={"#212121"}>
        <CallToAction />
        <Payment />
        <Integrate />
      </Box>
    </MotionFlex>
  );
}
