import React from "react";
import { Link } from "react-router-dom";

function Feed({ items, loading }) {
  if (loading)
    return () => {
      for (let i = 0; i < 10; i++) {
        return <h1>loading</h1>;
      }
    };

  if (items.length === 0) {
    return <h1>No Results for this Search</h1>;
  }

  return items.map((item, index) => {
    return (
      <div>
        <h1>{item.title}</h1>
        <p>{item.need}</p>
        <Link to={`/Cause/${item.id}`}>
          <img src={item.imageLink} alt={item.image.title} />
        </Link>
      </div>
    );
  });
}

export default Feed;
