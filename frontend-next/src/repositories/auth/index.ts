import { fetcher } from "@/lib/fetcher";

const registerUser = async (payload: Record<string, unknown>) => {
  try {
    const user = await fetcher("/auth/register", "POST", payload);
    return user;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (payload: Record<string, unknown>) => {
  try {
    const user = await fetcher("/auth/login", "POST", payload);
    return user;
  } catch (error) {
    throw error;
  }
};

export { registerUser, loginUser };
