import OurServices from "@/components/OurServices";
import Head from "next/head";
import {Grid, Container} from "@mui/material";
import ContactForm from "@/components/ContactForm";
import ContactUsCard from "@/components/ContactUsCard";

export async function getServerSideProps() {
  return {
    props: {
      title: "Services - Aux Cash For Cars Sydney",
      description:
        "Sell your car now for cash or a bank check. Aux cash for car pays the highest amount for your old, unwanted, scrap, or unworthy cars.",
      image: "https://auxcashforcarsydney.com/assets/servises.png",
      url: `https://auxcashforcarsydney.com/services`,
      keyword:
        "cash for cars sydney, Car Removal Sydney, sell my old car",
      width: 1200,
      height: 630,
    },
  };
}

const Services = ({ title, description, image, url, keyword, width, height }) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content={width} />
        <meta property="og:image:height" content={height} />
        <meta name="twitter:card" content='summary' />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <OurServices />
      <Grid
            sx={{
              mt: "10px",
              mb: "50px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            container
          >
            <Grid item md={5.8} sm={12} xs={12} mb={'40px'}>
              <ContactUsCard />
            </Grid>
            <Grid item md={5.8} sm={12} xs={12}>
              <ContactForm />
            </Grid>
          </Grid>
    </Container>
   
  );
};

export default Services;
