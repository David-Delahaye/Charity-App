import React from "react";
import { Link, useParams } from "react-router-dom";

import useCauses from "../utils/causes";
import Gallery from "../units/Gallery";

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
        <h1>{cause.title}</h1>
      </div>
      <div className="raised">
        <div className="completed" style={{ width: percentRaised + "%" }} />$
        {cause.funding} of ${cause.goal} raised ({parseInt(percentRaised)}
        %)
      </div>
      <div className="container page">
        <Gallery id={cause.id} />
        <div className="text">
          <div className="section">
            <h3>Summary</h3>
            <p>{cause.summary}</p>
          </div>
          {/* <div className="section">
            <h3>notice</h3>
            <p>{cause.notice}</p>
          </div> */}
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
    </div>
  );
}

export default Cause;
