const apiKey = "E2Qmj0iZcmk8EccqHJanSHyGIRyl2Dye";
export function getSearchGifs({ keyword }) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=20&offset=0&rating=g&lang=en`;

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
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20&rating=g`;

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
