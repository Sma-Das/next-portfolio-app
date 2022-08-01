import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import AboutMe from "../sections/about-me";
import Education from "../sections/education";
import Experience from "../sections/experience";
import LandingPage from "../sections/landing-page";
import Skills from "../sections/skills";

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
        <Sidebar>
          <div className="">Sidebar</div>
        </Sidebar>
        <Layout>
          <AboutMe />
          <Education />
          <Experience />
          <Skills />
        </Layout>
      </div>
    </div>
  );
};

export default Home;
