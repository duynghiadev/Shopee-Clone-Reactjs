class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:4000/",
      timeout: 10000,
    });

    this.instance.interceptors.request.use(
      (config) => {
        console.log(config);
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
          config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (config) => config.data,
      (error) => Promise.reject(error)
    );
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }
}

const http = new Http();

const fetchProfile = () => {
  http
    .get("profile")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

const fetchProduct = () => {
  http
    .get("products")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  http
    .post("login", {
      username,
      password,
    })
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
    })
    .catch((error) => {
      console.log(error);
    });
});

document
  .getElementById("btn-get-profile")
  .addEventListener("click", (event) => {
    fetchProfile();
  });

document
  .getElementById("btn-get-products")
  .addEventListener("click", (event) => {
    fetchProduct();
  });

document.getElementById("btn-get-both").addEventListener("click", (event) => {
  fetchProfile();
  fetchProduct();
});
