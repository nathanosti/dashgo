import {
  Flex,
  Box,
  Text,
  Input as ChakraInput,
  Icon,
  HStack,
  Avatar
} from "@chakra-ui/react";
import {
  RiSearchLine,
  RiNotificationLine,
  RiUserAddLine,
} from "react-icons/ri";

export default function Header() {
  return (
    <>
      <Flex
        as="header"
        width="100%"
        maxWidth={1480}
        height="20"
        marginX="auto"
        marginTop="4"
        px="6"
      >
        <Text
          as="span"
          fontSize="3xl"
          fontWeight="bold"
          letterSpacing="tight"
          width="64"
        >
          Dashgo
          <Text as="span" marginLeft="1" color="pink.500">
            .
          </Text>
        </Text>

        <Flex
          as="label"
          flex="1"
          py="4"
          px="8"
          ml="6"
          maxWidth={400}
          alignSelf="center"
          color="gray.200"
          position="relative"
          background="gray.800"
          borderRadius="full"
        >
          <ChakraInput
            color="gray.50"
            variant="unstyled"
            placeholder="Buscar na plataforma"
            _placeholder={{
              color: "gray.400",
            }}
            px="4"
            marginRight="4"
          />
          <Icon as={RiSearchLine} fontSize="20" />
        </Flex>

        <Flex align="center" marginLeft="auto">
          <HStack
            spacing="8"
            mx="8"
            pr="8"
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
          >
            <Icon as={RiNotificationLine} fontSize="20" cursor="pointer" />
            <Icon as={RiUserAddLine} fontSize="20" cursor="pointer" />
          </HStack>

          <Flex align="center">
            <Box mr="4" textAlign="right">
              <Text>Nathan Osti</Text>
              <Text color="gray.300" fontSize="small">
                nathan@gmail.com
              </Text>
            </Box>

            <Avatar size="md" name="Nathan Osti" src="https://github.com/nathanosti.png"/>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
