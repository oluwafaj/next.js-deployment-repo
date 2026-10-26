// Standard wrapper envelope returned by your backend API
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// Standard error shape from the backend
export interface ApiErrorResponse {
  statusCode: number;
  message: string;
  errors?: Record<string, string[]>;
}

// Example User model (adjust according to your backend user fields)
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt?: string;
}
