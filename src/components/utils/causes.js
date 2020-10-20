import { useState, useEffect } from "react";

async function fetchCauses(search, id, setting) {
  let url = "Na";

  switch (setting) {
    case "orgId":
      url = `https://api.globalgiving.org/api/public/orgservice/organization/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
      break;

    case "causeByOrg":
      url = `https://api.globalgiving.org/api/public/projectservice/organizations/${id}/projects?api_key=${process.env.REACT_APP_API_KEY}`;
      break;

    case "causeId":
      url = `https://api.globalgiving.org/api/public/projectservice/projects/collection/ids?api_key=${process.env.REACT_APP_API_KEY}&projectIds=${id}`;
      break;

    case "feat":
      url = `https://api.globalgiving.org/api/public/projectservice/featured/projects?api_key=${process.env.REACT_APP_API_KEY}`;
      break;

    case "search":
      url = `https://api.globalgiving.org/api/public/services/search/projects?api_key=${process.env.REACT_APP_API_KEY}&q=${search}`;
      break;

    case "gallery":
      url = `https://api.globalgiving.org/api/public/projectservice/projects/${id}/imagegallery?api_key=${process.env.REACT_APP_API_KEY}`;
      break;

    default:
      break;
  }

  let headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("mode", "cors");

  let req = new Request(url, {
    method: "GET",
    headers: headers,
  });

  const data = await fetch(req);
  const jsonData = await data.json();
  return jsonData;
}

function useCauses(search, id, setting) {
  const [causes, setCauses] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(
    (async) => {
      let current = true;
      setLoading(true);
      fetchCauses(search, id, setting).then((json) => {
        if (current) {
          console.log(json);
          //image id
          if (json.images) {
            setCauses(json.images.image);
          }
          //org Search
          else if (json.organizations) {
            setCauses(json.organizations.organization);
            //org Id
          } else if (json.organization) {
            setCauses(json.organization);
            //Search null
          } else if (
            (json.search && json.search.response.numberFound === 0) ||
            (json.projects && json.projects.numberFound === 0)
          ) {
            setCauses([]);
            //Cause Search
          } else {
            json.search !== undefined
              ? setCauses(json.search.response.projects.project)
              : setCauses(json.projects.project);
          }
          setLoading(false);
        }
      });
      return () => {
        current = false;
      };
    },
    [search, id, setting]
  );
  console.log(causes);
  return [causes, loading];
}

export default useCauses;
