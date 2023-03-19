import AboutCompany from "@/components/AboutCompany";
import Head from "next/head";

export async function getServerSideProps() {
  return {
    props: {
      title: "About - Aux Cash For Cars",
      description:
        "(AUX CAR FOR CASH Sydney) Has Been Pioneering The Metal Resource Recycling Industry In Sydney Region, Australia Since 2010 That Mostly Has Been Active In Car Removal Industry.",
      image: "https://auxcashforcarsydney.com/assets/about-us.png",
      url: `https://auxcashforcarsydney.com/about`,
      keyword:
        "cash for cars sydney, Car Removal Sydney, sell my old car",
      width: 1200,
      height: 630,
    },
  };
}

const About = ({ title, description, image, url, keyword, width, height }) => {
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
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content={width} />
        <meta property="og:image:height" content={height} />
        <meta name="twitter:card" content='summary' />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <AboutCompany />
    </>
  );
};

export default About;
