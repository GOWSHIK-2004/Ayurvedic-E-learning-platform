import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export type User = {
  id: number;
  username: string;
};

export function useAuth() {
  const { data: user, isLoading, error, refetch } = useQuery({
    queryKey: ["/api/me"],
    queryFn: async () => {
      try {
        const response = await apiRequest<User>("/api/me", {
          method: "GET",
        });
        return response;
      } catch (err) {
        // Return null on unauthorized or other errors
        return null;
      }
    },
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    refetch,
  };
}