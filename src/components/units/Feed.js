import React from "react";
import { Link } from "react-router-dom";

function Feed({ items, loading }) {
  console.log(loading);
  if (loading === true)
    return (
      <div>
        <h1>Loading</h1>
        <h1>Loading</h1>
        <h1>Loading</h1>
        <h1>Loading</h1>
        <h1>Loading</h1>
        <h1>Loading</h1>
      </div>
    );

  if (items.length === 0) {
    return <h1>No Results for this Search</h1>;
  }

  return items.map((item, index) => {
    return (
      <div key={index}>
        <h1>{item.title}</h1>
        <p>{item.need}</p>
        <Link to={`/Organization/${item.organization.id}`}>
          <h4>{item.organization.name}</h4>
        </Link>
        <Link to={`/Cause/${item.id}`}>
          <img src={item.imageLink} alt={item.image.title} />
        </Link>
      </div>
    );
  });
}

export default Feed;
