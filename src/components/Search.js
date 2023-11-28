import React, { useState } from "react";

function Search({ handleSearch }) {

  const [searchInput, setSearchInput] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    handleSearch(searchInput);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

// ? Self code 
// import React, {useState} from "react";

// function Search({ onSearch }) {

//   const [typeValue, setTypeValue] = useState("")

//   function handleSubmit(e) {
//     e.preventDefault();
//     onSearch(typeValue)
//   }

//   return (
//     <form className="searchbar" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         id="search"
//         placeholder="search free stuff"
//         value={typeValue}
//         onChange={(e) => setTypeValue(e.target.value)}
//       />
//       <button type="submit">🔍</button>
//     </form>
//   );
// }

// export default Search;