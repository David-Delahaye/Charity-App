import React, { useState } from "react";

import useCauses from "../utils/causes";
import Feed from "../units/Feed";
import SearchBar from "../units/SearchBar";

function Search() {
  const [search, setSearch] = useState("india");
  const [query, setQuery] = useState(search);
  const [causes, loading] = useCauses(query, undefined, "search");

  return (
    <div className="container">
      <div className="header">
        <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <h1>Explore Projects</h1>
      </div>
      <SearchBar setSearch={setSearch} setQuery={setQuery} search={search} />
      <Feed items={causes} loading={loading} />
    </div>
  );
}

export default Search;
