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
import { subLocation } from "../../api/subLocations/sublocation2/subLocation2-content";
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
      title: "Cash for cars Double Bay Sydney",
      description:
        "Looking to sell your car in Double Bay, Sydney? Look no further! Aux Cash for Cars Sydney offers top dollar and instant cash for cars in Double Bay and its surrounding areas. Get rid of your old, unwanted, or damaged vehicle hassle-free while receiving the best value. Contact Aux Cash for Cars Sydney today and experience a smooth and reliable car selling process.",
      image: "/assets/locationsImages/sublocation1Images/17.jpg",
      url: `https://auxcashforcarsydney.com/locations/location2/subLocation9`,
      keyword: "Cash for cars Sydney, car remval Sydney",
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
                    image={subLocation[9].image}
                    title={subLocation[9].title}
                    alt={subLocation[9].title}
                  />
                  <CardContent>
                    <h1>{subLocation[9].title}</h1>
                    {subLocation[9].description}
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
                        href="/locations/location2"
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
                      <TagsStyle>{subLocation[9].tags}</TagsStyle>
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
