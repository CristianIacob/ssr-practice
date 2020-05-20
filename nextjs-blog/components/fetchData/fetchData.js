import useSWR from "swr";
const axios = require("axios");

async function fetchStuff() {
  // Fetch data from external API
  const res = await axios({
    method: "GET",
    url: "https://api.unsplash.com/search/photos?",
    headers: {
      "content-type": "application/json",
    },
    params: {
      client_id: "8e2ef245a5391ecf438dac62cbe571b1bea4b805b66179b6aee27a2b01a7fd8f",
      query: "London",
    },
  });
  return res?.data?.results[0];
}

function FetchData() {
  const { data } = useSWR("/api/unsplash", () => fetchStuff());

  if (!data) return <div>loading...</div>;
  return <img src={data.urls.small} />;
}

export default FetchData;
