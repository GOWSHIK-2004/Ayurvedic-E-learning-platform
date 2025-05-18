import { useQuery } from "@tanstack/react-query";

export type User = {
  id: number;
  username: string;
};

export function useAuth() {
  const { data: user, isLoading, error, refetch } = useQuery({
    queryKey: ["/api/me"],
    queryFn: async () => {
      try {
        const response = await fetch("/api/me", {
          method: "GET",
          credentials: "include"
        });
        
        if (!response.ok) {
          if (response.status === 401) {
            return null;
          }
          throw new Error("Failed to fetch user data");
        }
        
        return await response.json();
      } catch (err) {
        console.error("Auth error:", err);
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