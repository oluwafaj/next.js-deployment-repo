import axios from "axios";
import { env } from "./env";

export const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL, // ✅ Uses NEXT_PUBLIC_API_URL to match env.ts
  headers: {
    "Content-Type": "application/json",
  },
});