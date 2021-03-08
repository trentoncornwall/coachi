import axios from "axios";

export default {
  userCreate: function (body) {
    return axios.post("/api/users/register", body);
  },
  userLogin: function (body) {
    return axios.post("/api/users/login", body);
  },
  userCheck: function () {
    return axios.get("/api/users/");
  },

  userLogout: function () {
    return axios.get("/api/users/logout");
  },
};
