import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  Box,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { subLocation } from "../../api/subLocations/sublocation1/subLocation1-content";
import ContactForm from "@/components/ContactForm";
import ContactUsCard from "@/components/ContactUsCard";
import SocialShareBtn, { Line } from "@/components/GlobalComponents";
import { BigCardStyle } from "@/components/GlobalComponents";
import { TagsStyle } from "@/components/GlobalComponents";
import { NextLinkBtn } from "@/components/GlobalComponents";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  return {
    props: {
      title: "Cash for cars Pyrmont Sydney",
      description:
        "Looking to sell your car in Pyrmont, Sydney? Cash for Cars Pyrmont offers top dollar for your vehicle, providing a hassle-free and convenient selling experience. Whether your car is old, damaged, or no longer running, we buy cars of all makes and models. Our team offers fair appraisals and pays cash on the spot, ensuring a quick and easy transaction. Contact Cash for Cars Pyrmont today to get a competitive offer for your car and enjoy a seamless selling process in Sydney.",
      image: "/assets/locationsImages/sublocation1Images/4.jpg",
      url: `https://auxcashforcarsydney.com/locations/location1/subLocation4`,
      keyword:
        "cash for cars sydney, Car Removal Sydney,sell my old car, pick up car for free, juk car removal",
      width: 1200,
      height: 630,
    },
  };
}

function post0({ title, description, image, url, keyword, width, height }) {
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
                    image={subLocation[4].image}
                    title={subLocation[4].title}
                    alt={subLocation[4].title}
                  />
                  <CardContent>
                    <h1>{subLocation[4].title}</h1>
                    {subLocation[4].description}
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
                      <Link
                        href="/locations/location1"
                        style={{ width: "10px" }}
                      >
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
                      <TagsStyle>{subLocation[4].tags}</TagsStyle>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default post0;
