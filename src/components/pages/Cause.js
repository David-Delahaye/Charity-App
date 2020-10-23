import React from "react";
import { Link, useParams } from "react-router-dom";

import useCauses from "../utils/causes";
import Gallery from "../units/Gallery";
import Progress from "../units/Progress";

function Cause() {
  let { causeId } = useParams();
  let [cause, loading] = useCauses("", causeId, "causeId");
  if (cause !== null) console.log(cause[0]);
  if (loading)
    return (
      <div>
        <div className="header"></div>
        <div className="text">
          <div className="section">
            <div className="loader" />
          </div>
          <div className="section">
            <div className="loader" />
          </div>
        </div>
      </div>
    );
  cause = cause[0];

  return (
    <div>
      <div className="header">
        <img src={cause.image.imagelink[4].url} />
        <h1>{cause.title}</h1>
      </div>
      <Progress total={cause.goal} complete={cause.funding} />
      <Gallery id={cause.id} />
      <div className="text">
        <div className="section">
          <h3>Summary</h3>
          <p>{cause.summary}</p>
        </div>
        <div className="section">
          <h3>need</h3>
          <p>{cause.need}</p>
        </div>
        <div className="section">
          <h3>impact</h3>
          <p>{cause.longTermImpact}</p>
        </div>
        <a href={cause.contactUrl} className="button">
          Donate Now
        </a>
      </div>
    </div>
  );
}

export default Cause;
