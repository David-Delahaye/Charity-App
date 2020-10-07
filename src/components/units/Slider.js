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
      <div key={index} className="item">
        <div className="text">
          <h2>{item.title}</h2>
          <Link to={`/Organization/${item.organization.id}`}>
            <h4>{item.organization.name}</h4>
          </Link>
        </div>
        <Link className="img" to={`/Cause/${item.id}`}>
          <img src={item.image.imagelink[3].url} alt={item.image.title} />
        </Link>
      </div>
    );
  });

  return <div className="slider">{renderItems}</div>;
}

export default Slider;
