import React from "react";
import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import { useRouter } from "next/router";
import SearchOptions from "../components/SearchOptions";
import { defaultSearch } from "../response";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer";

const Search = ({ results }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term}-Google Clone</title>
      </Head>

      <SearchHeader searchTerm={router.query.term} />

      <SearchOptions />

      <SearchResults results={results} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const useDummyData = false;

  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? defaultSearch
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
};

export default Search;
