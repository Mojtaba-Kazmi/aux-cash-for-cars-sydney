import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  Box,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import Link from "next/link";
import { post } from "../api/blog-content";
import ContactForm from "@/components/ContactForm";
import ContactUsCard from "@/components/ContactUsCard";
import SocialShareBtn from "@/components/GlobalComponents";
import { BigCardStyle } from "@/components/GlobalComponents";
import { NextLinkBtn } from "@/components/GlobalComponents";
import Head from "next/head";

export async function getServerSideProps() {
  return {
    props: {
      title: "The Value of a Used Car: A Guide to Finding Out How Much It Is",
      description:
        "There are a number of factors that can influence the value of a used car, from its make and model to its age and mileage. In addition, the value of a used car can vary depending on whether you're selling it to a dealer, a private party, or trade it in as part of a new car purchase.",
      image: "https://auxcashforcarsydney.com/assets/postImage/selling-run-down-cars.jpg",
      url: `https://auxcashforcarsydney.com/blog/post3`,
      keyword:
        "sell my old car, price of old car, determain price of old car, car model, car's age",
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
        <meta property="og:image" content={image} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:image:width" content={width} />
        <meta property="og:image:height" content={height} />
        <meta name="twitter:card" content='summary' />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
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
                    image={post[3].image}
                    title={post[3].alt}
                    alt={post[3].alt}
                  />
                  <CardContent>
                    {post[3].title}
                    {post[3].description}
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
                      <Link href="/blog" style={{ width: "10px" }}>
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
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default post0;
