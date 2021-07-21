import axios from "axios";

export default {
  userCreate: (body) => {
    return axios.post("/api/users/register", body);
  },
  userLogin: (body) => {
    return axios.post("/api/users/login", body);
  },
  userCheck: () => {
    return axios.get("/api/users/");
  },
  userLogout: () => {
    return axios.get("/api/users/logout");
  },
  userUpdate: (data) => {
    return axios.put("/api/users/", data);
  },
  mentors: () => {
    return axios.get("/api/mentors/");
  },
  conversationCreate: (body) => {
    return axios.post("/api/conversation/new", body);
  },
};
