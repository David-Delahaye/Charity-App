import { useState, useEffect } from "react";

async function fetchCauses(search) {
  const urlFeat = `https://api.globalgiving.org/api/public/projectservice/featured/projects?api_key=${process.env.REACT_APP_API_KEY}`;
  const urlSearch = `https://api.globalgiving.org/api/public/services/search/projects?api_key=${process.env.REACT_APP_API_KEY}&q=${search}`;

  let headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("mode", "cors");

  let url = "";
  if (search !== "") url = urlSearch;
  if (search === "") url = urlFeat;

  let req = new Request(url, {
    method: "GET",
    headers: headers,
  });

  const data = await fetch(req);
  const jsonData = await data.json();
  return jsonData;
}

function useCauses(search) {
  const [causes, setCauses] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(
    (async) => {
      console.log(search);
      let current = true;
      fetchCauses(search).then((json) => {
        if (current) {
          console.log(json);
          if (json.search && json.search.response.numberFound === 0) {
            setCauses([]);
          } else {
            json.search !== undefined
              ? setCauses(json.search.response.projects.project)
              : setCauses(json.projects.project);
            setLoading(false);
          }
        }
      });
      return () => {
        current = false;
      };
    },
    [search]
  );
  return [causes, loading];
}

export default useCauses;
