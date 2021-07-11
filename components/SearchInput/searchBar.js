import React from "react";

const inputStyle = {
  height: 46 /* IE11 fix */,
};

function SearchBar(props) {
  return (
    <div className="flex relative w-3/4 max-w-3xl">
      <input
        style={inputStyle}
        className="bg-white focus:outline-none focus:shadow-md border border-gray-300 rounded-lg py-2 px-10 block w-full appearance-none leading-normal"
        type="search"
        placeholder="Madrid, Taiwan, Singapore..."
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      <span onClick={props.onIconClick} className="absolute pin-r pin-t mt-3 mr-4 cursor-pointer text-purple-lighter top-0 right-0">
        <img className="h-4 w-4" src={`search.svg`} />
      </span>
    </div>
  );
}

export default SearchBar;
