import React, { useState } from "react";
import useCauses from "../utils/causes";

function Home() {
  const [search, setSearch] = useState("india");
  const [query, setQuery] = useState(search);
  const [causes, loading] = useCauses(query);

  const format = () => {
    if (loading)
      return () => {
        for (let i = 0; i < 10; i++) {
          return <h1>loading</h1>;
        }
      };

    return causes.map((cause, index) => {
      return (
        <div>
          <h1>{cause.title}</h1>
          <p>{cause.need}</p>
          <img src={cause.imageLink} alt={cause.image.title} />
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Causes</h1>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setQuery(search);
        }}
      >
        Search
      </button>
      {causes !== null ? format() : "N/A"}
    </div>
  );
}

export default Home;
