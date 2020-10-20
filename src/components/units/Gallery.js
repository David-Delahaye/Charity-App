import React from "react";
import useCauses from "../utils/causes";

function Gallery({ id }) {
  const [images, loading] = useCauses(null, id, "gallery");
  if (loading) return "..";
  return (
    <div>
      <img src={images[2].imagelink[2].url} />
      <img src={images[3].imagelink[2].url} />
      <img src={images[4].imagelink[2].url} />
    </div>
  );
}

export default Gallery;
