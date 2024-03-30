import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "fhk85qoOsehbeckGzajzOswz9IbUvVrK7NkOVv2kS-8";

const searchParms = {
  client_id: ACCESS_KEY,
  query: "",
  page: 1,
  per_page: 20,
  orientation: "landscape",
};

const requestImagesByQuery = async (query, page) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      ...searchParms,
      page,
      query,
    },
  });
  return data;
};

export default requestImagesByQuery;
