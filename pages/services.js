import OurServices from "@/components/OurServices";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>Aux Cash For Cars Sydney & Car Removals</title>
        <meta
          name="description"
          content="Sell your car now for cash or a bank cheque. Aux Cash For Car & Aux Car Removals Pays The Highest Cash For Cars In Sydney, we Pay the top amount  for your old, unwanted, scrap, or unroadworthy cars"
        />
        <meta
          name="keywords"
          content="cash for cars sydney, Car Removal Sydney,sell my old car,"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={"/services"} />

        <meta name="robots" content="index, follow" />
        {/* <meta property='og:image' content={services_pic1} /> */}
        <meta
          property="og:title"
          content="Aux Cash For Cars Sydney & Car Removals"
        />
        <meta
          property="og:description"
          content="Sell your car now for cash or a bank cheque. Aux Cash For Car & Aux Car Removals Pays The Highest Cash For Cars In Sydney, we Pay the top amount  for your old, unwanted, scrap, or unroadworthy cars"
        />
      </Head>
      <OurServices />
    </>
  );
};

export default Services;
