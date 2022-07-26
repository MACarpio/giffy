import { API_KEY, API_URL } from "./config";
const responseAPI = (apiRes) => {
  const { data } = apiRes;
  return data;
};

export default function getTrendingSearch() {
  const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  return fetch(apiUrl)
    .then((response) => response.json())
    .then(responseAPI);
}
