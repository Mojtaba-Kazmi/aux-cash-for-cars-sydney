import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "./api/theme";
import Layout from "@/components/Layout";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import gtag from "@/lib/gtag";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "G-H0XYGF1LDF", {
        page_path: url,
      });
    };
  
    router.events.on("routeChangeComplete", handleRouteChange);
  
    // Wait for GTM script to load
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-H0XYGF1LDF", { page_path: window.location.pathname });
  
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  

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
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-H0XYGF1LDF`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H0XYGF1LDF');
            `,
          }}
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
