import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { ApiResponse, User } from "@/lib/api-types";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      // Sends GET request to http://localhost:3002/api/v1/users
      const response = await apiClient.get<ApiResponse<User[]>>("/users");
      return response.data;
    },
  });
}