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

  const renderFeed = items.map((item, index) => {
    return (
      <div key={index} className="item">
        <img src={item.image.imagelink[4].url} alt={item.image.title} />
        <div className="text">
          <h3>{item.title}</h3>
          <Link to={`/Organization/${item.organization.id}`}>
            <h5>By {item.organization.name}</h5>
          </Link>
          <p>{item.need.slice(0, 200)}...</p>
          <Link to={`/Cause/${item.id}`} className="button">
            Learn More
          </Link>
        </div>
      </div>
    );
  });

  return <div className="feed">{renderFeed}</div>;
}

export default Feed;
