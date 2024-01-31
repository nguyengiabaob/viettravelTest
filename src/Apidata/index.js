import https from "axios";
const ApiKey = "422d3b0aff4943b786c243908c31e3e1";
export const getDataListnew = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${ApiKey}`;
  return await https.get(url);
};

export const getAllDataListnew = async () => {
  let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${ApiKey}`;
  return await https.get(url);
};
