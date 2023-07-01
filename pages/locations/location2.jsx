import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import Link from "next/link";
import { location } from "../api/locations-content";
import { subLocation } from "../api/subLocations/sublocation2/subLocation2-content";
import ContactForm from "@/components/ContactForm";
import ContactUsCard from "@/components/ContactUsCard";
import SocialShareBtn, { Line } from "@/components/GlobalComponents";
import { BigCardStyle } from "@/components/GlobalComponents";
import { TagsStyle } from "@/components/GlobalComponents";
import { NextLinkBtn } from "@/components/GlobalComponents";
import Head from "next/head";
import { useRouter } from "next/router";

import { MiniCardStyle } from "@/components/GlobalComponents";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export async function getServerSideProps() {
  return {
    props: {
      title: "Cash for Cars Eastern NSW",
      description:
        "Looking to sell your car for cash in Eastern NSW? Aux Cash for Cars Sydney is here to help! Get top dollar for your vehicle with our hassle-free and transparent cash for cars service. We buy cars of all makes, models, and conditions, offering a quick and convenient selling experience. Our team is professional, reliable, and committed to providing you with the best possible offer for your car. Contact Aux Cash for Cars Sydney today and turn your unwanted vehicle into instant cash in Eastern NSW.",
      image: "https://auxcashforcarsydney.com/assets/locationsImages/2.jpg",
      url: `https://auxcashforcarsydney.com/locations/location2`,
      keyword:
        "cash for cars sydney, Car Removal Sydney,sell my old car, pick up car for free, juk car removal",
      width: 1200,
      height: 630,
    },
  };
}

function post0({ title, description, image, url, keyword, width, height }) {
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
  let pslength = subLocation.length - 1;
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
        <meta name="keywords" content={keyword}></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content={width} />
        <meta property="og:image:height" content={height} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {/* <meta name="twitter:site" content="@example" /> */}
      </Head>
      <Box width={"100%"} overflow={"Hidden"}>
        <Container>
          <Box width={"100%"} overflow={"Hidden"}>
            <Grid
              container
              my={"50px"}
              rowGap={"50px"}
              justifyContent={"space-between"}
            >
              {/* post */}
              <Grid item md={7.9} sm={12} xs={12}>
                <BigCardStyle>
                  <Card>
                    <CardMedia
                      sx={{ height: "300px" }}
                      image={location[2].image}
                      title={location[2].alt}
                      alt={location[2].alt}
                    />
                    <CardContent>
                      {location[2].title}
                      {location[2].description}
                    </CardContent>

                    <Grid
                      container
                      sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        px: "15px",
                        pb: "5px",
                      }}
                    >
                      <Grid item md={6} sm={6} xs={2}>
                        <Link href="/locations" style={{ width: "10px" }}>
                          <NextLinkBtn>Back</NextLinkBtn>
                        </Link>
                      </Grid>
                      <Grid item md={3.8} sm={3.8} xs={10}>
                        <SocialShareBtn />
                      </Grid>
                    </Grid>
                  </Card>
                </BigCardStyle>
              </Grid>
              {/* Form */}
              <Grid item md={3.9} sm={12} xs={12}>
                <Grid container rowGap={"40px"}>
                  <Grid item md={12} sm={12} xs={12}>
                    <ContactUsCard />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <ContactForm />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <Card>
                      <CardContent>
                        <Typography component={"p"}> Tags </Typography>
                        <TagsStyle>{location[2].tags}</TagsStyle>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Box
          bgcolor={"secondary.main"}
          sx={{
            width: "100%",
            height: "auto",
            py: "50px",
          }}
        >
          <Box>
            <Container>
              <Typography
                variant="h4"
                component={"h1"}
                sx={{
                  mb: "30px",
                  color: "primary.main",
                  display: "inline-block",
                }}
              >
                Sydney CBD Suburbs
              </Typography>
            </Container>
          </Box>

          <Container>
            {/* Sublocations */}
            <Grid
              container
              sx={{ mt: "10px", justifyContent: "space-between" }}
            >
              {/* sublocation1 in page */}

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
                      image={subLocation[ps1].image}
                      title={subLocation[ps1].title}
                      alt={subLocation[ps1].title}
                    />

                    <CardContent>
                      <MiniCardStyle>
                        <Link href={"/locations/location2/subLocation" + ps1}>
                          <TitleContainer>
                            <h2>{subLocation[ps1].title}</h2>
                          </TitleContainer>
                        </Link>
                        <Postdescription>
                          {subLocation[ps1].description}
                        </Postdescription>
                        <Typography variant="body1" component={"p"}>
                          <Link href={"/locations/location2/subLocation" + ps1}>
                            Read More
                          </Link>
                        </Typography>
                      </MiniCardStyle>
                    </CardContent>
                  </Card>
                </Postanimation>
              </Grid>

              {/* sublocation2 in page */}
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
                      image={subLocation[ps2].image}
                      title={subLocation[ps2].title}
                      alt={subLocation[ps2].title}
                    />
                    <CardContent>
                      <MiniCardStyle>
                        <Link href={"/locations/location2/subLocation" + ps2}>
                          <TitleContainer>
                            <h2>{subLocation[ps2].title}</h2>
                          </TitleContainer>
                        </Link>

                        <Postdescription>
                          {subLocation[ps2].description}
                        </Postdescription>
                        <Typography variant="body1" component={"p"}>
                          <Link href={"/locations/location2/subLocation" + ps2}>
                            Read More
                          </Link>
                        </Typography>
                      </MiniCardStyle>
                    </CardContent>
                  </Card>
                </Postanimation>
              </Grid>

              {/* subLocation3 in page */}
              {/* <Grid
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
                      image={subLocation[ps3].image}
                      title={subLocation[ps3].title}
                      alt={subLocation[ps3].title}
                    />
                    <CardContent>
                      <MiniCardStyle>
                        <Link href={"/locations/location2/subLocation" + ps3}>
                          <TitleContainer>
                            <h2>{subLocation[ps3].title}</h2>
                          </TitleContainer>
                        </Link>
                        <Postdescription>
                          {subLocation[ps3].description}
                        </Postdescription>
                        <Typography variant="body1" component={"p"}>
                          <Link href={"/locations/location2/subLocation" + ps3}>
                            Read More
                          </Link>
                        </Typography>
                      </MiniCardStyle>
                    </CardContent>
                  </Card>
                </Postanimation>
              </Grid> */}

              {/* location4 in page */}
              {/* <Grid
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
                      image={subLocation[ps4].image}
                      title={subLocation[ps4].title}
                      alt={subLocation[ps4].title}
                    />
                    <CardContent>
                      <MiniCardStyle>
                        <Link href={"/locations/location2/subLocation" + ps4}>
                          <TitleContainer>
                            <h2>{subLocation[ps4].title}</h2>
                          </TitleContainer>
                        </Link>
                        <Postdescription>
                          {subLocation[ps4].description}
                        </Postdescription>
                        <Typography variant="body1" component={"p"}>
                          <Link href={"/locations/location2/subLocation" + ps4}>
                            Read More
                          </Link>
                        </Typography>
                      </MiniCardStyle>
                    </CardContent>
                  </Card>
                </Postanimation>
              </Grid> */}

              {/* location5 in page */}
              {/* <Grid
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
                      image={subLocation[ps5].image}
                      title={subLocation[ps5].title}
                      alt={subLocation[ps5].title}
                    />
                    <CardContent>
                      <MiniCardStyle>
                        <Link href={"/locations/location2/subLocation" + ps5}>
                          <TitleContainer>
                            <h2>{subLocation[ps5].title}</h2>
                          </TitleContainer>
                        </Link>
                        <Postdescription>
                          {subLocation[ps5].description}
                        </Postdescription>
                        <Typography variant="body1" component={"p"}>
                          <Link href={"/locations/location2/subLocation" + ps5}>
                            Read More
                          </Link>
                        </Typography>
                      </MiniCardStyle>
                    </CardContent>
                  </Card>
                </Postanimation>
              </Grid> */}

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
                      image={subLocation[ps6].image}
                      title={subLocation[ps6].title}
                      alt={subLocation[ps6].title}
                    />
                    <CardContent>
                      <MiniCardStyle>
                        <Link href={"/locations/location2/subLocation" + ps6}>
                          <TitleContainer>
                            <h2>{subLocation[ps6].title}</h2>
                          </TitleContainer>
                        </Link>
                        <Postdescription>
                          {subLocation[ps6].description}
                        </Postdescription>
                        <Typography variant="body1" component={"p"}>
                          <Link href={"/locations/location2/subLocation" + ps6}>
                            Read More
                          </Link>
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
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default post0;
