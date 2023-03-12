import Header from "@/components/header";
import "@/styles/globals.css";
import { theme } from "@/themes";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Roboto } from "next/font/google";

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
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>BodyArt</title>
        <meta name="description" content="Criado com carinho!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/logos/logolavanda.svg" />
      </Head>
      {/* <Header className={roboto.className} /> */}
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
