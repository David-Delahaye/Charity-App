import React from "react";
import { useParams } from "react-router-dom";

import useCauses from "../utils/causes";

function Cause() {
  let { causeId } = useParams();
  const [cause, loading] = useCauses("", causeId);
  if (cause !== null) console.log(cause[0]);

  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <h1>{cause[0].title}</h1>
      <p>{cause[0].need}</p>
    </div>
  );
}

export default Cause;
