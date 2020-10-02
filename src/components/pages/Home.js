import React, { useState } from "react";

import useCauses from "../utils/causes";
import Feed from "../units/Feed";
import SearchBar from "../units/SearchBar";

function Home() {
  const [search, setSearch] = useState("india");
  const [query, setQuery] = useState(search);
  const [causes, loading] = useCauses(query);

  return (
    <div>
      <h1>Causes</h1>
      <SearchBar setSearch={setSearch} setQuery={setQuery} search={search} />
      <Feed items={causes} loading={loading} />
    </div>
  );
}

export default Home;
