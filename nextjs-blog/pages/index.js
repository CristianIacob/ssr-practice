import React, { useState } from "react";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import SearchInput from "../components/SearchInput";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchSubmit = (value) => {
    setSearchValue(value);
  };

  return (
    <Layout>
      <SearchInput searchValue={searchValue} handleSearchSubmit={handleSearchSubmit} />
      <Cards searchValue={searchValue} />
    </Layout>
  );
}
