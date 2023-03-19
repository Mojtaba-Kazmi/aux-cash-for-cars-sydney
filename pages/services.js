import OurServices from "@/components/OurServices";
import Head from "next/head";

export async function getServerSideProps() {
  return {
    props: {
      title: "Services - Aux Cash For Cars Sydney",
      description:
        "Sell your car now for cash or a bank cheque. Aux Cash For Car & Aux Car Removals Pays The Highest Cash For Cars In Sydney, we Pay the top amount  for your old, unwanted, scrap, or unroadworthy cars",
      image: "https://auxcashforcarsydney.com/assets/servises.png",
      url: `https://auxcashforcarsydney.com/services`,
      keyword:
        "cash for cars sydney, Car Removal Sydney, sell my old car",
      width: 1200,
      height: 630,
    },
  };
}

const Services = ({ title, description, image, url, keyword, width, height }) => {
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
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content={width} />
        <meta property="og:image:height" content={height} />
      </Head>
      <OurServices />
    </>
  );
};

export default Services;
