import { useQuery } from "@tanstack/react-query";
import { fetchCurrentUser } from "../api/currentUserApi";

// Custom hook for fetching current user
export const useCurrentUser = (email, teamName, planName) => {
    return useQuery({
      queryKey: ['currentUser', email, teamName, planName],
      queryFn: () => fetchCurrentUser({ email, teamName, planName }),
      enabled: true, // Always enabled, runs the query even when parameters are empty
    });
  };
  