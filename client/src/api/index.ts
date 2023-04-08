import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user_info")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user_info")!).token}`;
  }

  return req;
});

export const signIn = (data: any) => API.post("/users/signin", data);
export const signInGoogle = (accessToken: string) =>
  API.post("/users/signin", null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const signUp = (data: any) => API.post("/users/signup", { email: data.email, password: data.password });
export const signUpGoogle = (accessToken: string) =>
  API.post("/users/signup", { googleAccessToken: accessToken });