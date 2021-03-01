import axios from "axios";

export default {
  userCreate: function (body) {
    return axios.post("/api/users", body);
  },
};
