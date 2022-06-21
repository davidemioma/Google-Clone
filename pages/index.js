import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Google Clone</title>
      </Head>

      <Header />

      <Body />

      <Footer />
    </div>
  );
};

export default Home;
