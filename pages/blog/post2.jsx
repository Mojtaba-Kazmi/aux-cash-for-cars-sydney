import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  Box,
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
      title: "Cars to Get Rid of: Signs you need a replacement one",
      description:
        "lead-acid batteries and lubricating oils in old cars pose a health risk. Used vehicles have damaged parts that are dangerous for people. As a car ages, its repair bills tend to increase. read on to learn signs it’s time to replace it.",
      image: "https://auxcashforcarsydney.com/assets/postImage/end-of-life-car.jpg",
      url: `https://auxcashforcarsydney.com/blog/post2`,
      keyword:
        "shaking and Noises in car, expensive repairs, replacement, Excessive Rust in cars",
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
                    image={post[2].image}
                    title={post[2].alt}
                    alt={post[2].alt}
                  />
                  <CardContent>
                    {post[2].title}
                    {post[2].description}
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
                    <Grid item md={3.8} sm={3.8} xs={9}>
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
