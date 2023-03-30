// axios({
//   method: "get",
//   baseURL: "https://reqres.in/api",
//   url: "/users",
// })
//   .then((res) => {
//     console.log("res 1: ", res);
//   })
//   .catch((error) => {
//     console.warn(error);
//   });

// axios({
//   method: "get",
//   baseURL: "https://reqres.in/api",
//   url: "/users/2",
// })
//   .then((res) => {
//     console.log("res 2: ", res);
//   })
//   .catch((error) => {
//     console.warn(error);
//   });

const http = axios.create({
  baseURL: "https://reqres.in/api",
});

http.interceptors.request.use(
  (config) => {
    console.log("config request: ", config);
    return config;
  },
  (error) => {
    return Promise.reject("error request: ", error);
  }
);

http.interceptors.response.use(
  (config) => {
    console.log("config response: ", config);
    return config.data.data;
  },
  (error) => {
    return Promise.reject("error response: ", error);
  }
);

http
  .get("/users/2")
  .then((res) => {
    console.log("res /users/2: ", res);
  })
  .catch((error) => {
    console.warn(error);
  });
