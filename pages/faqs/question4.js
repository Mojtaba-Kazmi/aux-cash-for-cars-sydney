import ContactForm from "@/components/ContactForm";
import SocialShareBtn from "@/components/GlobalComponents";
import { Grid, Card, CardContent, Container } from "@mui/material";
import Link from "next/link";
import { NextLinkBtn } from "@/components/GlobalComponents";
import { Line } from "@/components/GlobalComponents";
import { FAQs } from "../api/faqs-content";
import Head from "next/head";
import { BigCardStyle } from "@/components/GlobalComponents";
import ContactUsCard from "@/components/ContactUsCard";

const question4 = () => {
  return (
    <>
      <Head>
        <title>How much I should expect for my car?</title>
        <meta
          name="description"
          content="Our team utilizes the most advanced technologies to calculate a fair offer 
                representing how much your vehicle is. Therefore, we cannot say exactly how
                 much you'll get there unless we hear more details about your vehicle's 
                 type and condition."
        />
        <meta
          name="keywords"
          content="cash for cars sydney, Car Removal Sydney,sell my old car, price, fair offer"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={"/faq/question4"} />

        <meta name="robots" content="index, follow" />
        <meta name="og:type" content="article" />
        <meta name="og:description" content="description" />
      </Head>
      <Container>
        <Grid container spacing={2} mt={6} mb={8}>
          <Grid item xs={12} sm={12} md={7}>
            <BigCardStyle>
              <Card>
                <CardContent>
                  {FAQs[3].head}
                  {FAQs[3].p}
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
export default question4;
