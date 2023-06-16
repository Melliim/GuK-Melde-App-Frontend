import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:7001",
  headers: {
    "Content-type": "application/json"
  }
});
