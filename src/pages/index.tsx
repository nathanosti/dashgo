import type { NextPage } from "next";
import { Flex, Stack, Button } from "@chakra-ui/react";
import Input from "components/Form/Input";

const Home: NextPage = () => {
  return (
    <>
      <Flex width="100vw" height="100vh" align="center" justify="center">
        <Flex
          flexDir="column"
          as="form"
          width="100%"
          maxWidth={360}
          background="gray.800"
          padding={8}
          borderRadius={8}
          autoComplete="false"
        >
          <Stack spacing={4}>
            <Input name="email" label="Email address" type="email" />

            <Input name="password" label="Password" type="password" />
          </Stack>

          <Button marginTop={6} colorScheme="pink" size="lg">
            Submit
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
