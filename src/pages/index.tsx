import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "components/header";
import { Footer } from "components/footer";
import { About } from "components/about";
import { Cases } from "components/cases";
import { Donate } from "components/donate";
import { ContactUs } from "components/contact-us";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>8h Landing Project</title>
      </Head>

      <Header />
      <About />
      <Cases />
      <Donate />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
