import React, { useEffect, useMemo, useRef, useState } from "react";
import SearchBar from "./searchBar";
import data from "../../city.list.json";

function SearchInput(props) {
  const cityNames = useMemo(
    () => Array.from(new Set(data.map((val) => val.name))),
    [data]
  );

  const suggestionsDropdownRef = useRef(null);
  const inputRef = useRef(null);

  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState(cityNames.slice(0, 6));
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsDropdownRef.current &&
        inputRef.current &&
        !suggestionsDropdownRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        console.warn("click outside");
        setIsSuggestionsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;

    setSearchValue(searchTerm);

    setIsSuggestionsVisible(true);

    if (searchTerm) {
      setSuggestions(
        cityNames
          .filter((name) =>
            name.toLowerCase().startsWith(searchTerm.toLowerCase())
          )
          .slice(0, 6)
      );
    } else {
      setSuggestions(cityNames.slice(0, 6));
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.handleSearchSubmit(searchValue);
    setIsSuggestionsVisible(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    props.handleSearchSubmit(suggestion);
    setIsSuggestionsVisible(false);
  };

  return (
    <form
      className="flex items-center w-full pb-16 flex-col z-50 relative"
      onSubmit={handleSearchSubmit}
    >
      <SearchBar
        value={searchValue}
        onChange={handleSearchChange}
        onIconClick={handleSearchSubmit}
        setSuggestions={setSuggestions}
        setIsSuggestionsVisible={setIsSuggestionsVisible}
        isSuggestionsVisible={isSuggestionsVisible}
        inputRef={inputRef}
      />
      {isSuggestionsVisible && (
        <ul
          ref={suggestionsDropdownRef}
          className="w-3/4 max-w-3xl  absolute top-10 bg-white border border-gray-300 shadow-md rounded-b-lg"
        >
          {suggestions.map((suggestion) => (
            <li
              className="py-2 px-10 hover:bg-gray-200 cursor-pointer "
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SearchInput;
