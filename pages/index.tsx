import Head from "next/head";
import Layout from "../component/Layout";
import About from "./template/about";
import Flows from "./template/flows";
import Experiences from "./template/experiences";
import Portofolios from "./template/portofolios";
import Footer from "./template/footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Shih-Ya</title>
        <meta name="description" content="Shihya's Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <About></About>
      <hr></hr>
      <Flows></Flows>
      <hr></hr>
      <Experiences></Experiences>
      <hr></hr>
      <Portofolios></Portofolios>
      <Footer></Footer>
      <Layout>test</Layout>
    </>
  );
}
