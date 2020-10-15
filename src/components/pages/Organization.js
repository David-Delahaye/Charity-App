import React from "react";
import { useParams } from "react-router-dom";

import useCauses from "../utils/causes";
import Feed from "../units/Feed";
import Slider from "../units/Slider";

function Organization() {
  let { orgId } = useParams();
  const [org, loading] = useCauses("", orgId, "orgId");
  const [causes, loadingCauses] = useCauses("", orgId, "causeByOrg");
  if (org !== null) console.log(org);
  if (loading) return <h1>loading</h1>;
  console.log(org.themes);

  return (
    <div>
      <h1>
        {org.name}
        <img src={org.logoUrl} />
      </h1>
      <p>{org.mission}</p>
      <div>
        <ul>
          <li>Country:{org.country}</li>
          <li>City:{org.city}</li>
          <li>Projects:{org.totalProjects}</li>
          <li>Website:{org.url}</li>
          <li>Themes:{org.themes.theme[0].name}</li>
        </ul>
      </div>
      <h1>Other projects</h1>
      <Slider items={causes} loading={loadingCauses} />
    </div>
  );
}

export default Organization;
