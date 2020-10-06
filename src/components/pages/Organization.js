import React from "react";
import { useParams } from "react-router-dom";

import useCauses from "../utils/causes";
import Feed from "../units/Feed";

function Organization() {
  let { orgId } = useParams();
  const [org, loading] = useCauses("", orgId, "orgId");
  const [causes, loadingCauses] = useCauses("", orgId, "causeByOrg");
  if (org !== null) console.log(org);
  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <h1>{org.name}</h1>
      <p>{org.mission}</p>
      <h1>Other projects</h1>
      <Feed items={causes} loading={loadingCauses} />
    </div>
  );
}

export default Organization;
