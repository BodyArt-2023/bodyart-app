import Header from "@/components/header";
import "@/styles/globals.css";
import { theme } from "@/themes";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserContext from "@/context/userContext";
import GaleriaContext from "@/context/galeriaContext";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: [
    "latin",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin-ext",
    "vietnamese",
  ],
});

export default function App({ Component, pageProps }) {
  const [userContext, setUserContext] = useState(null);
  const [galeriaContext, setGaleriaContext] = useState(null);

  useEffect(() => {
    console.log("userContext", userContext);
  }, [userContext]);

  return (
    <UserContext.Provider value={[userContext, setUserContext]}>
      <GaleriaContext.Provider value={[galeriaContext, setGaleriaContext]}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>BodyArt</title>
            <meta name="description" content="Criado com carinho!" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="images/logos/logolavanda.svg" />
          </Head>
          <Header className={roboto.className} />
          <main className={roboto.className}>
            <Component {...pageProps} />
          </main>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </ThemeProvider>
      </GaleriaContext.Provider>
    </UserContext.Provider>
  );
}
