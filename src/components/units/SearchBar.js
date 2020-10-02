import React from "react";

function SearchBar({ search, setSearch, setQuery }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setQuery(search);
      }}
    >
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
