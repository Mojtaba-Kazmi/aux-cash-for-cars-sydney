import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "./api/theme";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <meta
          name="description"
          content={pageProps.description}
        />
        <meta
          name="keywords"
          content={pageProps.keyword}
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={pageProps.url} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageProps.title} />
        <meta property="og:description" content={pageProps.description} />
        <meta property="og:image" content={pageProps.image} />
        <meta property="og:image:width" content={pageProps.width} />
        <meta property="og:image:height" content={pageProps.height} />
        <meta property='fb:app_id' content="1171785366859399"/>
        <meta name="google-site-verification" content="IWtv_Ch3kYck0rXCtEfUZoYAvv12ZKnpbYllZ84w3iU" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
