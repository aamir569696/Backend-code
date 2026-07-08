import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export async function register(password, email, username) {
  try {
    const response = await api.post("/register", {
      password,
      email,
      username,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function login(username, password) {
  try {
    const response =await api.post("/login", {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function getme() {
  try {
    const response = await api.create("/get-me");
    return response.data;
  } catch (err) {
    throw err;
  }
}
