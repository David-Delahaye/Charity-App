import React from "react";
import { Link } from "react-router-dom";

function Slider({ items, loading }) {
  console.log(items);
  console.log(loading);
  if (loading === true)
    return (
      <div>
        <h1>...</h1>
      </div>
    );

  if (items.length === 0) {
    return "";
  }

  const renderItems = items.map((item, index) => {
    return (
      <Link key={index} className="item" to={`/Cause/${item.id}`}>
        <div className="text">
          <h4>{item.title}</h4>
        </div>
        <img
          className="img"
          src={item.image.imagelink[3].url}
          alt={item.image.title}
        />
      </Link>
    );
  });

  return <div className="slider">{renderItems}</div>;
}

export default Slider;
