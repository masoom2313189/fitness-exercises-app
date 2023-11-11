export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3ba02e948emsh5ea86d2f65215e8p113f57jsn483a1fa053fb",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3ba02e948emsh5ea86d2f65215e8p113f57jsn483a1fa053fb",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
