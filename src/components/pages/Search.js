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
      <h1>Causes</h1>
      <SearchBar setSearch={setSearch} setQuery={setQuery} search={search} />
      <Feed items={causes} loading={loading} />
    </div>
  );
}

export default Search;
