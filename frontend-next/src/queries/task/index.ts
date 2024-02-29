import { useQuery } from "@tanstack/react-query";
import { getCategoriesByUserId } from "@/repositories/category";

export const getTaskKey = (userId: number) => ["tasks", userId];

export const useTask = (userId: number) => {
  const result = useQuery({
    queryKey: getTaskKey(userId),
    queryFn: () => getCategoriesByUserId(userId),
  });
  return result;
};
