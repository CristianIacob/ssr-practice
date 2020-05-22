import React from "react";

function SearchBar(props) {
  return (
    <div className="flex relative w-2/3 mt-6">
      <input
        className="bg-white focus:outline-none focus:shadow-md border border-gray-300 rounded-lg py-2 px-10 block w-full appearance-none leading-normal"
        type="search"
        placeholder="Madrid, Oslo, Singapore..."
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      <span onClick={props.onIconClick} className="absolute pin-r pin-t mt-3 mr-4 cursor-pointer text-purple-lighter top-0 right-0">
        <svg version="1.1" className="h-4 text-dark" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 52.966 52.966">
          <path
            d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
      c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
      C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
      S32.459,40,21.983,40z"
          />
        </svg>
      </span>
    </div>
  );
}

export default SearchBar;
