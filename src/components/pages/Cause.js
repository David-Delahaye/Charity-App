import React from "react";
import { Link, useParams } from "react-router-dom";

import useCauses from "../utils/causes";

function Cause() {
  let { causeId } = useParams();
  let [cause, loading] = useCauses("", causeId, "causeId");
  if (cause !== null) console.log(cause[0]);
  if (loading) return <h1>loading</h1>;

  cause = cause[0];
  let percentRaised = (cause.funding / cause.goal) * 100;

  return (
    <div>
      <div className="header">
        <img src={cause.image.imagelink[4].url} />
        <h1>
          {cause.title} <br />
          by{" "}
          <Link to={`/Organization/${cause.organization.id}`}>
            {cause.organization.name}
          </Link>
        </h1>
      </div>
      <div className="container page">
        <div className="text">
          <h3>Summary</h3>
          <p>{cause.summary}</p>
          <h3>notice</h3>
          <p>{cause.notice}</p>
          <h3>need</h3>
          <p>{cause.need}</p>
          <h3>impact</h3>
          <p>{cause.longTermImpact}</p>
          <h3>Goal</h3>
        </div>
        <div className="raised">
          <div className="completed" style={{ height: percentRaised + "%" }} />
          {cause.funding} of {cause.goal} raised {percentRaised}%
        </div>
      </div>
    </div>
  );
}

export default Cause;
