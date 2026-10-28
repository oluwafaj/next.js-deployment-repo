import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://backendnextjs-webapp-gtgsc2dbduhmh9e0.westus3-01.azurewebsites.net/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
