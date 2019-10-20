import axios from "axios";

const apiUrl = "https://api.github.com/users/";

export async function getData(query) {
  return await axios.get(apiUrl + query);
}
