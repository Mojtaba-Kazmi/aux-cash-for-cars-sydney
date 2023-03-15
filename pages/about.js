import AboutCompany from "@/components/AboutCompany";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About - Aux Cash For Cars</title>
        <meta
          name="description"
          content="(AUX CAR FOR CASH Sydney) Has Been Pioneering The Metal Resource Recycling 
              Industry In Sydney Region, Australia Since 2010 That Mostly Has 
              Been Active In Car Removal Industry."
        />
        <meta
          name="keywords"
          content="cash for cars sydney, Car Removal Sydney,sell my old car,"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={"/about"} />

        <meta name="robots" content="index, follow" />
        {/* <meta property="og:image" content={pic_A_1} /> */}
        <meta property="og:title" content="About - Aux Cash For Cars" />
        <meta
          property="og:description"
          content="(AUX CAR FOR CASH Sydney) Has Been Pioneering The Metal Resource Recycling 
              Industry In Sydney Region, Australia Since 2010 That Mostly Has 
              Been Active In Car Removal Industry."
        />
      </Head>
      <AboutCompany />
    </>
  );
};

export default About;
