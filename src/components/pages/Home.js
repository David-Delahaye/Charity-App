import React from "react";

import useCauses from "../utils/causes";
import Slider from "../units/Slider";
import { Link } from "react-router-dom";

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
          <Link className="button" to="/search">
            Search Causes
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="featured">
          <p className="featuredtext">
            This website aims to provide information and guidance on charitable
            causes from <b>all around the world</b>, whether local to yourself
            or a cause that strikes dear to your heart, we aim to give you all
            the information you need so you can <b>spread the love</b> and help
            those who need it most.
          </p>
        </div>
        <h3>Featured Projects</h3>
        <Slider items={causes} loading={loading} />
      </div>
    </div>
  );
}

export default Home;
