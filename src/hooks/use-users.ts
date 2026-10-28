import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { ApiResponse, User } from "@/lib/api-types";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      // Sends GET request to the correct backend endpoint
      const response = await apiClient.get<ApiResponse<User[]>>("/api/v1/users");
      return response.data;
    }
  });
}