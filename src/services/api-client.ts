import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "52f30202bf32434c907b273ba92731b4",
  },
});
