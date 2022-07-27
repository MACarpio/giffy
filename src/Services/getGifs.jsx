import { API_KEY, API_URL } from "./config";

export function getSearchGifs({ keyword }) {
  const url = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`;

  return fetch(url)
    .then((response) => response.json())
    .then((res) => {
      const { data } = res;
      const gifs = data.map((gif) => {
        const { title, id, images } = gif;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
}

export function getTrendingGifs() {
  const url = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=15&rating=g`;

  return fetch(url)
    .then((response) => response.json())
    .then((res) => {
      const { data } = res;
      const gifs = data.map((gif) => {
        const { title, id, images } = gif;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
}
