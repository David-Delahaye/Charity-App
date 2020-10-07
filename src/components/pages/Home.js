import React from "react";

import useCauses from "../utils/causes";
import Slider from "../units/Slider";

function Home() {
  const [causes, loading] = useCauses("", undefined, "feat");

  return (
    <div>
      <div className="hero">
        <img
          className="splash"
          src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <div className="heroText">
          <h1>Charity App</h1>
          <h4>
            <em>Give your money away</em>
          </h4>
        </div>
      </div>
      <h3>Featured Projects</h3>
      <Slider items={causes} loading={loading} />
    </div>
  );
}

export default Home;
