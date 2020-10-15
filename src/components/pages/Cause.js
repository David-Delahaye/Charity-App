import React from "react";
import { useParams } from "react-router-dom";

import useCauses from "../utils/causes";

function Cause() {
  let { causeId } = useParams();
  let [cause, loading] = useCauses("", causeId, "causeId");
  if (cause !== null) console.log(cause[0]);
  if (loading) return <h1>loading</h1>;

  cause = cause[0];
  return (
    <div>
      <div className="header">
        <img src={cause.image.imagelink[4].url} />
        <h1>
          {cause.title} <br />
          by {cause.organization.name}
        </h1>
      </div>
      <div className="container">
        <h3>Summary</h3>
        <p>{cause.summary}</p>
        <h3>notice</h3>
        <p>{cause.notice}</p>
        <h3>need</h3>
        <p>{cause.need}</p>
        <h3>impact</h3>
        <p>{cause.longTermImpact}</p>
        <h3>Goal</h3>
        <p>
          {cause.funding} of {cause.goal} raised
        </p>
      </div>
    </div>
  );
}

export default Cause;
