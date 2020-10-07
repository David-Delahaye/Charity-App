import React from "react";

import useCauses from "../utils/causes";
import Slider from "../units/Slider";

function Home() {
  const [causes, loading] = useCauses("", undefined, "feat");

  return <Slider items={causes} loading={loading} />;
}

export default Home;
