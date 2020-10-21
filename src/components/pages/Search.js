import React, { useState } from "react";

import useCauses from "../utils/causes";
import Feed from "../units/Feed";
import SearchBar from "../units/SearchBar";

function Search() {
  const [search, setSearch] = useState("Global Giving");
  const [query, setQuery] = useState(search);
  const [causes, loading] = useCauses(query, undefined, "search");

  return (
    <div>
      <div className="header">
        <img src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <h1>
          Explore Projects
          <SearchBar
            setSearch={setSearch}
            setQuery={setQuery}
            search={search}
          />
        </h1>
      </div>
      <div className="container">
        <Feed items={causes} loading={loading} />
      </div>
    </div>
  );
}

export default Search;
