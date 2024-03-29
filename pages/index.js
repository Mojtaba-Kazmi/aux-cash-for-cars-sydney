import { Box } from '@mui/material'
import Head from 'next/head'
import ImageSlider from '@/components/ImageSlider'
import HowWeWorks from '@/components/HowWeWorks'
import AboutCompany from '@/components/AboutCompany'
import CompanyValues from '@/components/CompanyValues'
import OurServices from '@/components/OurServices'
import Export from '@/components/Export'
import Resycler from '@/components/Resycler'
import ContactUs from '@/components/ContactUs'
import Tags from "@/components/Tags";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aux Cash For Cars Sydney</title>
        <meta
          name="description"
          content="Sell your car now for cash or a bank check in Sydney. Aux cash for cars pays the highest amount for your old, unwanted, scrap, or unworthy cars."
        />
        <meta
          name="keywords"
          content="cash for cars sydney, Car Removal Sydney, sell my old car"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://auxcashforcarsydney.com" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://auxcashforcarsydney.com" />
        <meta
          property="og:title"
          content="Aux Cash For Cars Sydney & Car Removals"
        />
        <meta
          property="og:description"
          content="Sell your car now for cash or a bank check. Aux cash for car pays the highest amount for your old, unwanted, scrap, or unworthy cars."
        />
        <meta
          property="og:image"
          content="https://auxcashforcarsydney.com/assets/nissan.jpg"
        />
        <meta property="og:image:width" content="630" />
        <meta property="og:image:height" content="1200" />
        <meta
          name="google-site-verification"
          content="IWtv_Ch3kYck0rXCtEfUZoYAvv12ZKnpbYllZ84w3iU"
        />
      </Head>

      <main>
        <Box width={"100%"} overflow={"Hidden"}>
          <ImageSlider />
          <HowWeWorks />
          <AboutCompany />
          <CompanyValues />
          <OurServices />
          <Export />
          <Resycler />
          <ContactUs />
          <Tags />
        </Box>
      </main>
    </>
  );
}
