import axios from "axios";

export const api = axios.create({
  headers: { "Access-Control-Allow-Origin": "*" },
  baseURL: "https://www.olivas.digital/wp-json/wp/v2/",
});
