import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import AboutMe from "../sections/about-me";
import LandingPage from "../sections/landing-page";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sma Das</title>
        <meta name="description" content="Sma Das' Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <LandingPage />

      <div className="flex">
        {/* <div className=" h-screen sticky top-0 hidden w-1/5 xl:w-[10%] md:flex justify-center z-10 shadow-2xl">
          <div className="">Sidebar</div>
        </div> */}
        <Sidebar>
          <div className="">Sidebar</div>
        </Sidebar>
        <Layout>
          <AboutMe />
          <div className="h-screen">Hello</div>
          <div className="h-screen">Hello</div>
          <div className="h-screen">Hello</div>
        </Layout>
      </div>
    </div>
  );
};

export default Home;
