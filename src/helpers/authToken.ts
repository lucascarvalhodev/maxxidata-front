import axios from "axios";

export const setTokenAuthorization = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "bearer " + token;
    return;
  }
  delete axios.defaults.headers.common["Authorization"];
};
