import React from "react";
import { useParams } from "react-router-dom";

import useCauses from "../utils/causes";

function Organization() {
  let { orgId } = useParams();
  console.log(orgId);
  const [cause, loading] = useCauses("", orgId, "orgId");
  if (cause !== null) console.log(cause[0]);

  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <h1>{cause.name}</h1>
      <p>{cause.mission}</p>
    </div>
  );
}

export default Organization;
