import ContactForm from "@/components/ContactForm";
import SocialShareBtn from "@/components/GlobalComponents";
import {
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import Link from "next/link";
import { NextLinkBtn } from "@/components/GlobalComponents";
import { Line } from "@/components/GlobalComponents";
import ContactUsCard from "@/components/ContactUsCard";
import { FAQs } from "../api/faqs-content";
import Head from "next/head";
import { BigCardStyle } from "@/components/GlobalComponents";

export async function getServerSideProps() {
  return {
    props: {
      title: "FAQs - Will you buy my car if it doesn’t have title?",
      description:
        "Of course, we do! We will also have to walk through the process of transferring ownership properly",
      url: "https://auxcashforcarsydney.com/faqs/question5",
      keyword:
        "cash for cars sydney, Car Removal Sydney, sell my old car, ownership, car title, paperwork",
    },
  };
}

const question5 = ({ title, description, url, keyword }) => {
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
          <Grid container spacing={2} mt={6} mb={8}>
            <Grid item xs={12} sm={12} md={7}>
            <BigCardStyle>
              <Card>
                <CardContent>
                  {FAQs[4].head}
                  {FAQs[4].p}
                  <Grid
                    container
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      px: "15px",
                      pb: "5px",
                    }}
                  >
                    <Grid item md={6.2} sm={6} xs={2}>
                      <Link href="/faqs" style={{ width: "10px" }}>
                        <NextLinkBtn>Back</NextLinkBtn>
                      </Link>
                    </Grid>
                    <Grid item md={4.8} sm={3.8} xs={10}>
                      <SocialShareBtn />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </BigCardStyle>
            </Grid>
            <Line />
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
          </Grid>
        </Container>
    </>
  );
};
export default question5;
