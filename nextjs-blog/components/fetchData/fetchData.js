import useSWR from "swr";
const axios = require("axios");

async function fetchStuff() {
  // Fetch data from external API
  console.log("api_key: ", process.env.PHOTOS_API_KEY);
  const res = await axios({
    method: "GET",
    url: "https://api.unsplash.com/search/photos?",
    headers: {
      "content-type": "application/json",
    },
    params: {
      client_id: process.env.PHOTOS_API_KEY,
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
