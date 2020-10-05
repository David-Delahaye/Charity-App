import { useState, useEffect } from "react";

async function fetchCauses(search, id) {
  const urlFeat = `https://api.globalgiving.org/api/public/projectservice/featured/projects?api_key=${process.env.REACT_APP_API_KEY}`;
  const urlSearch = `https://api.globalgiving.org/api/public/services/search/projects?api_key=${process.env.REACT_APP_API_KEY}&q=${search}`;
  const urlOrg = `https://api.globalgiving.org/api/public/orgservice/all/organizations/active?api_key=${process.env.REACT_APP_API_KEY}&filter=country:${search}}`;
  const urlId = `https://api.globalgiving.org/api/public/projectservice/projects/collection/ids?api_key=${process.env.REACT_APP_API_KEY}&projectIds=${id}`;

  let headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("mode", "cors");

  let url = urlOrg;
  if (search !== "") url = urlSearch;
  if (search === "") url = urlFeat;
  if (id !== undefined) url = urlId;

  let req = new Request(url, {
    method: "GET",
    headers: headers,
  });

  console.log(req);
  const data = await fetch(req);
  const jsonData = await data.json();
  return jsonData;
}

function useCauses(search, id) {
  const [causes, setCauses] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(
    (async) => {
      console.log(search);
      let current = true;
      fetchCauses(search, id).then((json) => {
        if (current) {
          console.log(json);
          //org Search
          if (json.organizations) {
            setCauses(json.organizations.organization);
            //Search null
          } else if (json.search && json.search.response.numberFound === 0) {
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
    [search, id]
  );
  return [causes, loading];
}

export default useCauses;
