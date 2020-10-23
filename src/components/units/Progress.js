import React, { useState } from "react";
import useCauses from "../utils/causes";

function Progress({ total, complete }) {
  let percentRaised = (complete / total) * 100;
  return (
    <div className="raised">
      <div className="completed" style={{ width: percentRaised + "%" }} />$
      {complete} of ${total} raised ({parseInt(percentRaised)}
      %)
    </div>
  );
}

export default Progress;
