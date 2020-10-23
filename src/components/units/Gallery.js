import React, { useState } from "react";
import useCauses from "../utils/causes";

function Gallery({ id }) {
  const [activeIndex, setActiveIndex] = useState(0);
  let [images, loading] = useCauses(null, id, "gallery");
  if (loading)
    return (
      <div className="gallery">
        <div className="loader" />
      </div>
    );
  const items = images.slice(1, 6);
  console.log(items);

  const next = () => {
    const nextIndex =
      activeIndex === items.length - 1 ? activeIndex : activeIndex + 1;
    setActiveIndex(nextIndex);
    console.log(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? activeIndex : activeIndex - 1;
    setActiveIndex(nextIndex);
    console.log(nextIndex);
  };

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const imageRender = items.map((item, index) => {
    return (
      <img src={item.imagelink[3].url} alt={item.title || "charity image"} />
    );
  });

  const nubs = items.map((item, index) => {
    console.log(((index + 0.5) / items.length) * 100);
    if (index === activeIndex) {
      return (
        <div
          style={{
            left: (((index + 0.5) / items.length) * 100) / 2 + 25 + "%",
          }}
          className="nub control active"
          onClick={() => {
            goToIndex(index);
          }}
        ></div>
      );
    }
    return (
      <div
        style={{ left: (((index + 0.5) / items.length) * 100) / 2 + 25 + "%" }}
        className="nub control"
        onClick={() => {
          goToIndex(index);
        }}
      ></div>
    );
  });

  return (
    <div className="gallery" index={activeIndex}>
      <div className="control left" onClick={previous}>
        <i class="fas fa-arrow-left"></i>
      </div>
      <div className="control right" onClick={next}>
        <i class="fas fa-arrow-right"></i>
      </div>
      {nubs}
      <div
        className="galleryContent"
        style={{ left: -activeIndex * 20 + "rem" }}
      >
        {imageRender}
      </div>
    </div>
  );
}

export default Gallery;
