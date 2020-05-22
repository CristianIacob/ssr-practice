import React, { useState } from "react";
import SearchBar from "./searchBar";

function SearchInput(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.handleSearchSubmit(searchValue);
  };

  return (
    <form className="flex justify-center w-full my-16" onSubmit={handleSearchSubmit}>
      <SearchBar value={searchValue} onChange={handleSearchChange} onIconClick={handleSearchSubmit} />
    </form>
  );
}

export default SearchInput;
