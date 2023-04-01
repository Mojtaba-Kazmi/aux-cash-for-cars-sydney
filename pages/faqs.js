import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import ContactForm from "@/components/ContactForm";
import { FAQs } from "./api/faqs-content";
import {
  Description,
  Line,
  MiniCardStyle,
} from "@/components/GlobalComponents";
import Head from "next/head";
import ContactUsCard from "@/components/ContactUsCard";

export async function getServerSideProps() {
  return {
    props: {
      title: "FAQs - Aux Cash For Cars Sydney",
      description:
        "Sell your car now for cash or a bank check. Aux Cash For Car pays the highest cash for cars in Sydney, we pay the top amount  for your old, unwanted, scrap, or unworthy cars",
      url: "https://auxcashforcarsydney.com/faqs",
      keyword:
        "cash for cars sydney, Car Removal Sydney,sell my old car, why a cash for cars, brands, fast pick-up, price of damaged cars, car title",
    },
  };
}

const Faqs = ({ title, description, url, keyword }) => {

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
        <meta name="twitter:card" content='summary' />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <Container>
        <Box mt={8} mb={10}>
          <Typography
            variant="h4"
            component={"h2"}
            color="primary.main"
            fontWeight={"500"}
            gutterBottom
          >
            Frequently asked questions
          </Typography>
          <Grid container spacing={2}>
            {/* FAQs start */}
            <Grid item xs={12} sm={12} md={7}>
              <Grid container spacing={2}>
                {/* question1 start */}
                <Grid item xs={12} sm={12} md={12}>
                  <Card elevation={4}>
                    <CardContent>
                      <MiniCardStyle>
                      <Link href={"/faqs/question1"}>{FAQs[0].head}</Link>
                        <Description>{FAQs[0].p}</Description>
                        <Typography variant="body" component={"p"}>
                          <Link href={"/faqs/question1"}>Read More</Link>
                        </Typography>
                      </MiniCardStyle>
                    </CardContent>
                  </Card>
                </Grid>
                {/* question1 end */}

                {/* question2 start */}
                <Grid item xs={12} sm={12} md={12}>
                  <Card elevation={4}>
                    <CardContent>
                      <MiniCardStyle>
                      <Link href={"/faqs/question2"}>{FAQs[1].head}</Link>
                        <Description>{FAQs[1].p}</Description>
                        <Typography variant="body1" component={"p"}>
                          <Link href={"/faqs/question2"}>Read More</Link>
                        </Typography>
                      </MiniCardStyle>
                    </CardContent>
                  </Card>
                </Grid>
                {/* question 2 end */}

                {/* question3 start */}
                <Grid item xs={12} sm={12} md={12}>
                  <Card elevation={4}>
                    <CardContent>
                      <MiniCardStyle>
                      <Link href={"/faqs/question3"}>{FAQs[2].head}</Link>
                        <Description>{FAQs[2].p}</Description>
                        <Typography variant="body1" component={"p"}>
                          <Link href={"/faqs/question3"}>Read More</Link>
                        </Typography>
                      </MiniCardStyle>
                    </CardContent>
                  </Card>
                </Grid>
                {/* question 3 end */}

                {/* question 4 start */}
                <Grid item xs={12} sm={12} md={12}>
                  <Card elevation={4}>
                    <CardContent>
                      <MiniCardStyle>
                      <Link href={"/faqs/question4"}>{FAQs[3].head}</Link>
                        <Description>{FAQs[3].p}</Description>
                        <Typography variant="body1" component={"p"}>
                          <Link href={"/faqs/question4"}>Read More</Link>
                        </Typography>
                      </MiniCardStyle>
                    </CardContent>
                  </Card>
                </Grid>
                {/* question 4 end */}

                {/* question 5 start */}
                <Grid item xs={12} sm={12} md={12}>
                  <Card elevation={4}>
                    <CardContent>
                      <MiniCardStyle>
                      <Link href={"/faqs/question5"}>{FAQs[4].head}</Link>
                        <Description>{FAQs[4].p}</Description>
                        <Typography variant="body1" component={"p"}>
                          <Link href={"/faqs/question5"}>Read More</Link>
                        </Typography>
                      </MiniCardStyle>
                    </CardContent>
                  </Card>
                </Grid>
                {/* question 5 end */}
              </Grid>
            </Grid>
            {/* FAQs end */}
            <Line />

            {/* contact form component start */}
            <Grid item xs={12} sm={12} md={4.5}>
            <Grid container rowGap={"40px"}>
                <Grid item md={12} sm={12} xs={12}>
                  <ContactUsCard />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <ContactForm />
                </Grid>
            </Grid>
            </Grid>
            {/* contact form component end */}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Faqs;
