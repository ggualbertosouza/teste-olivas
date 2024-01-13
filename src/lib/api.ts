import axios from "axios";

export const api = axios.create({
  headers:{
    
  },
  baseURL: "https://www.olivas.digital/wp-json/wp/v2/",
});
