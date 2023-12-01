import React from "react";
import { useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { question } from "./api/faqs-content";
import { MiniCardStyle } from "@/components/GlobalComponents";
import { styled } from "@mui/system";
import {
  Grid,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ContactUsCard from "@/components/ContactUsCard";
import Head from "next/head";

export async function getServerSideProps() {
  return {
    props: {
      title: "FAQ - Aux Cash For Cars Sydney",
      description:
        "Explore Aux Cash for Cars Sydney's comprehensive FAQS page to find answers to all your queries about selling your car for top cash! From the selling process and documentation requirements to payment details and more, our FAQs provide valuable insights to ensure a smooth and hassle-free experience. Discover everything you need to know before selling your car to Aux Cash for Cars Sydney. Get instant cash and expert guidance today!",
      image: "https://auxcashforcarsydney.com/assets/postImage/scrap-car.jpg",
      url: `https://auxcashforcarsydney.com/faqs`,
      keyword:
        "cash for cars sydney, Car Removal Sydney, sell my old car, unwanted cars",
      width: 1200,
      height: 630,
    },
  };
}

function Locations({ title, description, image, url, keyword, width, height }) {
  const Postanimation = styled("div")`
    animation: textmoving1 2s;
    animation-iteration-count: 1; 
    @keyframes textmoving1 {

        0%{
           margin-left: 20px;
        }
        100%{
            margin-left: 0px; 
         }
  `;
  const TitleContainer = styled("div")`
    height: 42px;
    width: 100%;
    overflow: hidden;
    @media screen and (max-width: 1024px) {
      height: 42px;
    }
    @media screen and (max-width: 600px) {
      height: auto;
    }
  `;

  const Postdescription = styled("div")`
    height: 135px;
    overflow: hidden;
    margin-top: 5px;
    @media screen and (max-width: 1024px) {
      height: 75px;
    }
    @media screen and (max-width: 600px) {
      height: 95px;
    }
  `;
  // location printer
  let pslength = question.length - 1;
  const [nextdisable, setNextdisable] = useState(false);
  const [backdisable, setBakcdisable] = useState(true);
  let [pagenum, setPagenum] = useState(1);

  let [ps1, setPs1] = useState(pslength);
  let [ps2, setPs2] = useState(pslength - 1);
  let [ps3, setPs3] = useState(pslength - 2);
  let [ps4, setPs4] = useState(pslength - 3);
  let [ps5, setPs5] = useState(pslength - 4);
  let [ps6, setPs6] = useState(pslength - 5);

  function heandelClickNext() {
    setPagenum(pagenum + 1);
    // ------------------------
    setBakcdisable(false);
    if (ps1 - 12 <= 0) {
      setNextdisable(true);
    }
    // -------------------------
    if (ps1 - 6 > 0) {
      setPs1(ps1 - 6);
    } else {
      setPs1(0);
    }

    // -------------------------
    if (ps2 - 6 > 0) {
      setPs2(ps2 - 6);
    } else {
      setPs2(0);
    }

    // -------------------------
    if (ps3 - 6 > 0) {
      setPs3(ps3 - 6);
    } else {
      setPs3(0);
    }

    // -------------------------
    if (ps4 - 6 > 0) {
      setPs4(ps4 - 6);
    } else {
      setPs4(0);
    }

    // -------------------------
    if (ps5 - 6 > 0) {
      setPs5(ps5 - 6);
    } else {
      setPs5(0);
    }

    // -------------------------
    if (ps6 - 6 > 0) {
      setPs6(ps6 - 6);
    } else {
      setPs6(0);
    }
  }

  function heandelClickBack() {
    setPagenum(pagenum - 1);
    setNextdisable(false);
    if (ps1 + 12 > pslength) {
      setBakcdisable(true);
    }
    // -------------------------
    if (ps1 + 6 <= pslength) {
      setPs1(ps1 + 6);
    }

    // -------------------------
    if (ps1 + 5 <= pslength) {
      setPs2(ps1 + 5);
    }

    // -------------------------
    if (ps1 + 4 <= pslength) {
      setPs3(ps1 + 4);
    }

    if (ps1 + 3 <= pslength) {
      setPs4(ps1 + 3);
    }

    if (ps1 + 2 <= pslength) {
      setPs5(ps1 + 2);
    }

    if (ps1 + 1 <= pslength) {
      setPs6(ps1 + 1);
    }
  }

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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <Container>
        <Box width={"100%"} overflow={"Hidden"}>
          <Typography
            variant="h4"
            component={"h1"}
            sx={{ mt: "10px", color: "primary.main", display: "inline-block" }}
          >
            FAQs
          </Typography>
          <Typography
            component={"p"}
            sx={{ display: "inline-block", ml: "2px" }}
          >
            IF YOUR QUESTION IS NOT ON THIS PAGE, PLEASE GO TO THE NEXT PAGES
          </Typography>
          {/* locations right */}
          <Grid container sx={{ mt: "10px", justifyContent: "space-between" }}>
            {/* location1 in page */}

            <Grid
              md={3.7}
              sm={5.7}
              xs={12}
              item
              display={ps1 === 0 ? "none" : "flex"}
              mb={"40px"}
            >
              <Postanimation>
                <Card height={"100%"}>
                  <CardMedia
                    sx={{ height: "200px" }}
                    image={question[ps1].image}
                    title={question[ps1].alt}
                    alt={question[ps1].alt}
                  />

                  <CardContent>
                    <MiniCardStyle>
                      <Link href={"/faqs/question" + ps1}>
                        <TitleContainer>{question[ps1].title}</TitleContainer>
                      </Link>
                      <Postdescription>
                        {question[ps1].description}
                      </Postdescription>
                      <Typography variant="body1" component={"p"}>
                        <Link href={"/faqs/question" + ps1}>Read More</Link>
                      </Typography>
                    </MiniCardStyle>
                  </CardContent>
                </Card>
              </Postanimation>
            </Grid>

            {/* location2 in page */}
            <Grid
              md={3.7}
              sm={5.7}
              xs={12}
              item
              display={ps2 === 0 ? "none" : "flex"}
              mb={"40px"}
            >
              <Postanimation>
                <Card>
                  <CardMedia
                    sx={{ height: "200px" }}
                    image={question[ps2].image}
                    title={question[ps2].alt}
                    alt={question[ps2].alt}
                  />
                  <CardContent>
                    <MiniCardStyle>
                      <Link href={"/faqs/question" + ps2}>
                        <TitleContainer>{question[ps2].title}</TitleContainer>
                      </Link>

                      <Postdescription>
                        {question[ps2].description}
                      </Postdescription>
                      <Typography variant="body1" component={"p"}>
                        <Link href={"/faqs/question" + ps2}>Read More</Link>
                      </Typography>
                    </MiniCardStyle>
                  </CardContent>
                </Card>
              </Postanimation>
            </Grid>

            {/* location3 in page */}
            <Grid
              md={3.7}
              sm={5.7}
              xs={12}
              item
              display={ps3 === 0 ? "none" : "flex"}
              mb={"40px"}
            >
              <Postanimation>
                <Card>
                  <CardMedia
                    sx={{ height: "200px" }}
                    image={question[ps3].image}
                    title={question[ps3].alt}
                    alt={question[ps3].alt}
                  />
                  <CardContent>
                    <MiniCardStyle>
                      <Link href={"/faqs/question" + ps3}>
                        <TitleContainer>{question[ps3].title}</TitleContainer>
                      </Link>
                      <Postdescription>
                        {question[ps3].description}
                      </Postdescription>
                      <Typography variant="body1" component={"p"}>
                        <Link href={"/faqs/question" + ps3}>Read More</Link>
                      </Typography>
                    </MiniCardStyle>
                  </CardContent>
                </Card>
              </Postanimation>
            </Grid>

            {/* location4 in page */}
            <Grid
              md={3.7}
              sm={5.7}
              xs={12}
              item
              display={ps4 === 0 ? "none" : "flex"}
              mb={"40px"}
            >
              <Postanimation>
                <Card>
                  <CardMedia
                    sx={{ height: "200px" }}
                    image={question[ps4].image}
                    title={question[ps4].alt}
                    alt={question[ps4].alt}
                  />
                  <CardContent>
                    <MiniCardStyle>
                      <Link href={"/faqs/question" + ps4}>
                        <TitleContainer>{question[ps4].title}</TitleContainer>
                      </Link>
                      <Postdescription>
                        {question[ps4].description}
                      </Postdescription>
                      <Typography variant="body1" component={"p"}>
                        <Link href={"/faqs/question" + ps4}>Read More</Link>
                      </Typography>
                    </MiniCardStyle>
                  </CardContent>
                </Card>
              </Postanimation>
            </Grid>

            {/* location5 in page */}
            <Grid
              md={3.7}
              sm={5.7}
              xs={12}
              item
              display={ps5 === 0 ? "none" : "flex"}
              mb={"40px"}
            >
              <Postanimation>
                <Card>
                  <CardMedia
                    sx={{ height: "200px" }}
                    image={question[ps5].image}
                    title={question[ps5].alt}
                    alt={question[ps5].alt}
                  />
                  <CardContent>
                    <MiniCardStyle>
                      <Link href={"/faqs/question" + ps5}>
                        <TitleContainer>{question[ps5].title}</TitleContainer>
                      </Link>
                      <Postdescription>
                        {question[ps5].description}
                      </Postdescription>
                      <Typography variant="body1" component={"p"}>
                        <Link href={"/faqs/question" + ps5}>Read More</Link>
                      </Typography>
                    </MiniCardStyle>
                  </CardContent>
                </Card>
              </Postanimation>
            </Grid>

            {/* location6 in page */}
            {/* <Grid
              md={3.7}
              sm={5.7}
              xs={12}
              item
              display={ps6 === 0 ? "none" : "flex"}
              mb={"40px"}
            >
              <Postanimation>
                <Card>
                  <CardMedia
                    sx={{ height: "200px" }}
                    image={question[ps6].image}
                    title={question[ps6].alt}
                    alt={question[ps6].alt}
                  />
                  <CardContent>
                    <MiniCardStyle>
                      <Link href={"/faqs/question" + ps6}>
                        <TitleContainer>{question[ps6].title}</TitleContainer>
                      </Link>
                      <Postdescription>
                        {question[ps6].description}
                      </Postdescription>
                      <Typography variant="body1" component={"p"}>
                        <Link href={"/faqs/question" + ps6}>Read More</Link>
                      </Typography>
                    </MiniCardStyle>
                  </CardContent>
                </Card>
              </Postanimation>
            </Grid> */}
          </Grid>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              bottom: "10px",
              right: "20px",
              zIndex: "10",
            }}
          >
            <Typography
              variant="p"
              component="p"
              sx={{
                backgroundColor: "primary.main",
                px: "5px",
                py: "2px",
                mb: "4px",
                color: "white.main",
                borderRadius: "4px",
              }}
            >
              Page:{pagenum}
            </Typography>
            <Box>
              <Button
                variant="contained"
                sx={{ color: "white.main", mr: "5px" }}
                onClick={heandelClickBack}
                disabled={backdisable}
              >
                <ArrowBackIosIcon />
              </Button>
              <Button
                variant="contained"
                sx={{ color: "white.main", ml: "5px" }}
                onClick={heandelClickNext}
                disabled={nextdisable}
              >
                <ArrowForwardIosIcon />
              </Button>
            </Box>
          </Box>

          {/* locations left */}
          <Grid
            sx={{
              mt: "10px",
              mb: "50px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            container
          >
            <Grid item md={5.8} sm={12} xs={12} mb={"40px"}>
              <ContactUsCard />
            </Grid>
            <Grid item md={5.8} sm={12} xs={12}>
              <ContactForm />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Locations;
