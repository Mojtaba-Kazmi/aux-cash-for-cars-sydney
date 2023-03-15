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
// import { contactPic } from '@/public/assets/contact.png';
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Aux Cash For Cars</title>
        <meta
          name="description"
          content={`Fill out the form  and one of our Car Removal specialists will give you a call. Alternatively you may call us free on ${(
            <a href="tel:0469798540" title="Click here to make a call">
              0469798540
            </a>
          )}`}
        />
        <meta
          name="keywords"
          content="cash for cars sydney, Car Removal Sydney,sell my old car, contact"
        ></meta>

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={"/about"} />

        <meta name="robots" content="index, follow" />
        {/* <meta property='og:image' content={contactPic} /> */}
        <meta property="og:title" content="Contact Us - Aux Cash For Cars" />
        <meta
          property="og:description"
          content={`Fill out the form  and one of our Car Removal specialists will give you a call. Alternatively you may call us free on ${(
            <a href="tel:0469798540" title="Click here to make a call">
              0469798540
            </a>
          )}`}
        />
      </Head>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          color: "body.main",
          width: "100%",
          height: "auto",
          textAlign: { xs: "center", sm: "justify", md: "justify" },
          paddingBottom: "20px",
        }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 6 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                variant="h"
                component="h2"
                color="primary.main"
                px="10px"
              >
                Contact Us
              </Typography>
              <CardContent>
                <Typography
                  variant="body2"
                  component="p"
                  style={{
                    width: { xs: "200px", sm: "300px", md: "600px" },
                    textAlign: "justify",
                    marginBottom: "30px",
                  }}
                >
                  {Section1Contact}
                </Typography>
                <PhonNumber />
              </CardContent>
            </Grid>
            <Grid item xs={11} sm={5} md={5}>
              <CardMedia
                component="img"
                alt=" "
                height={{ xs: 180, sm: 300, md: 400 }}
                image="/assets/contact.png"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container color="body.main">
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 38 }}
          sx={{
            pt: "50px",
            pb: "50px",
            color: "body.main",
          }}
        >
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h5" color="#01b636">
              Contact Us
            </Typography>
            <CardContent>
              <Typography
                variant="body2"
                component="p"
                style={{
                  width: { xs: "200px", sm: "300px", md: "600px" },
                  textAlign: "justify",
                  marginBottom: "30px",
                  color: "body.main",
                }}
              >
                {Section2Contact}
              </Typography>
            </CardContent>
            <Typography variant="h5" color="#01b636">
              Open Hours
            </Typography>
            <Grid container>
              <Grid xs={6} sm={6} md={6} item>
                Mon – Fri
              </Grid>
              <Grid xs={6} sm={6} item md={6}>
                6:30am – 11:30am
              </Grid>
              <Grid xs={6} sm={6} item md={6}>
                Sun
              </Grid>

              <Grid xs={6} sm={6} item md={6}>
                6:30am – 4:30pm
              </Grid>
              <Grid xs={6} sm={6} item md={6}>
                Sat
              </Grid>
              <Grid xs={6} sm={6} item md={6}>
                Closed
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={11} sm={5} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
