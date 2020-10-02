import { useState, useEffect } from "react";

async function fetchCauses(search) {
  const url = `https://api.globalgiving.org/api/public/services/search/projects?api_key=${process.env.REACT_APP_API_KEY}&q=${search}`;
  const url2 = `https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=${process.env.REACT_APP_API_KEY}`;

  let headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("mode", "cors");

  let req = new Request(url, {
    method: "GET",
    headers: headers,
  });

  console.log(req.headers);

  const data = await fetch(req);
  console.log(data);
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
          setCauses(json.search.response.projects.project);
          setLoading(false);
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
