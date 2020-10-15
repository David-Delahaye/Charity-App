import React from "react";
import { useParams } from "react-router-dom";

import useCauses from "../utils/causes";

function Cause() {
  let { causeId } = useParams();
  const [cause, loading] = useCauses("", causeId, "causeId");
  if (cause !== null) console.log(cause[0]);

  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <div className="header">
        <img src={cause[0].image.imagelink[4].url} />
        <h1>
          {cause[0].title} <br />
          by {cause[0].contactName}
        </h1>
      </div>
      <div className="container">
        <p>{cause[0].need}</p>
      </div>
    </div>
  );
}

export default Cause;
