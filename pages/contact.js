import ContactForm from "@/components/ContactForm";
import {
  CardMedia,
  Grid,
  Typography,
  Box,
  CardContent,
  Container,
} from "@mui/material";
import { Section1Contact, Section2Contact } from "./api/contact-content";
import PhonNumber from "@/components/PhonNumber";
import Head from "next/head";

export async function getServerSideProps() {
  return {
    props: {
      title:
        "Contact Us - Aux Cash For Cars Sydney",
      description:
        "Fill out the form  and one of our Car Removal specialists will give you a call. Alternatively you may call us free on 0469798540",
      image: "https://auxcashforcarsydney.com/assets/contact.png",
      url: "https://auxcashforcarsydney.com/contact",
      keyword:
        "cash for cars sydney, Car Removal Sydney,sell my old car, contact",
      width: 1200,
      height: 630,
    },
  };
}

const Contact = ({ title, description, image, url, keyword, width, height }) => {
  return (
    <>
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
      <Box
        sx={{
          backgroundColor: "secondary.main",
          color: "body.main",
          width: "100%",
          height: "auto",
          textAlign: { xs: "center", sm: "justify", md: "justify" },
          py: "50px",
        }}
      >
        <Container>
          <Grid
            container
            alignItems={'center'}
            justifyContent={"space-between"}
            py={'10px'}
          >
            {/* section 1 left */}
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                variant="h4"
                component="h1"
                color="primary.main"
              >
                CONTCAT US
              </Typography>
              <CardContent>
                <Typography
                  variant="body2"
                  component="p"
                  mb={'30px'}
                >
                  {Section1Contact}
                </Typography>
                <PhonNumber />
              </CardContent>
            </Grid>

            {/* section 1 right */}
            <Grid item xs={12} sm={5} md={5} alignItems={'center'}>
              <Box
              height={{ xs: '350px', sm: '300px', md: '400px' }}
              width={{ xs: '350px', sm: '300px', md: '400px' }}
              sx={{display: 'flex'}}
              mx={'auto'}
              >
              <CardMedia
                component="img"
                alt=" "
                
                height={{ xs: '180px', sm: '300px', md: '400px' }}
                image="/assets/contact.png"
              />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

        {/* section 2*/}
      <Container>
        <Grid
          container
          sx={{
            py: "50px",
            color: "body.main",
            justifyContent: "space-between"
          }}
        >
          {/* section 2 left */}
          <Grid item xs={12} sm={5.5} md={5.5}
          
          >
            <h3>
              Contact Us
            </h3>
              <Typography
                component="p"
                sx={{
                  width: "100%",
                  textAlign: "justify",
                  mb: "50px",
                  mt: "20px",
                  color: "body.main",
                  
                }}
              >
                {Section2Contact}
              </Typography>
            
            <h3>
              Open Hours
            </h3>
            <Grid container mt={'20px'}>
              <Grid container borderBottom={2} pb={'5px'}>
                <Grid xs={6} sm={6} md={6} item >
                  Monday – Friday
                </Grid>
                <Grid xs={6} sm={6} item md={6} textAlign={"right"}>
                  6:30am – 11:30am
                </Grid>
              </Grid>
              <Grid container my={"40px"} borderBottom={2} pb={'5px'}>
                <Grid xs={6} sm={6} item md={6}>
                  Saturday
                </Grid>

                <Grid xs={6} sm={6} item md={6} textAlign={"right"}>
                  6:30am – 4:30pm
                </Grid>
              </Grid>
              <Grid container borderBottom={2} pb={'5px'}>
                <Grid xs={6} sm={6} item md={6}>
                  Sunday
                </Grid>
                <Grid xs={6} sm={6} item md={6} textAlign={"right"}>
                  Closed
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
          {/* section 2 right */}
          <Grid item xs={12} sm={6} md={6}
          mt={{md:'0', sm:'0', xs: '50px'}}
          >
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
