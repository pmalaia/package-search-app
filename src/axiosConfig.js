import axios from "axios";

const customInstance = axios.create({
  baseURL: "https://data.jsdelivr.com/v1/package/npm",
  headers: { Accept: "application/json" },
});

export default customInstance;
