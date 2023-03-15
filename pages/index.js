import { createTheme, ThemeProvider, Box } from '@mui/material'
import Head from 'next/head'
import ImageSlider from '@/components/ImageSlider'
import images from './api/images'
import HowWeWorks from '@/components/HowWeWorks'
import AboutCompany from '@/components/AboutCompany'
import CompanyValues from '@/components/CompanyValues'
import OurServices from '@/components/OurServices'
import Export from '@/components/Export'
import Resycler from '@/components/Resycler'
import ContactUs from '@/components/ContactUs'


export default function Home() {
  return (
    <>
      <Head>
        <title>Aux Cash For Cars Sydney & Car Removals</title>
        <meta name="description" content="Sell your car now for cash or a bank cheque. Aux Cash For Car & Aux Car Removals Pays The Highest Cash For Cars In Sydney, we Pay the top amount  for your old, unwanted, scrap, or unroadworthy cars" />
        <meta name="keywords" content="cash for cars sydney, Car Removal Sydney,sell my old car,"></meta>
        <link rel="icon" href="/favicon.ico"/>
        <link rel='canonical' href={'/'} />
        
        <meta name="robotes" content="index, follow"/>
        <meta name="og:type" content="article"/>
        <meta name="og:description" content="description"/>
      </Head>
      
      <main >
        <Box width={'100%'} overflow ={'Hidden'}>
          <ImageSlider images={images}/>
          <HowWeWorks />
          <AboutCompany />
          <CompanyValues />
          <OurServices />
          <Export />
          <Resycler />
          <ContactUs/>
        </Box>
      </main>
      
      </>
  )
}
