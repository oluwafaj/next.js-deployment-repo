import { apiClient } from "./api-client";

export interface LoginResponse {
  success: boolean;
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export async function loginUser(email: string, password: string) {
  // Calls POST http://localhost:3002/api/v1/auth/login
  const response = await apiClient.post<LoginResponse>("/auth/login", {
    email,
    password,
  });

  if (response.data.token) {
    // Store access token in localStorage
    localStorage.setItem("accessToken", response.data.token);
  }

  return response.data;
}

export function logoutUser() {
  localStorage.removeItem("accessToken");
  window.location.href = "/login";
}