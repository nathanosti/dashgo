import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme";
import Header from "components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <ChakraProvider theme={theme}>
        {router.pathname !== "/" && <Header />}
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
