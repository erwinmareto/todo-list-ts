import { fetcher } from "@/lib/fetcher";

const getCategoriesByUserId = async (userId: number) => {
  try {
    const categories = await fetcher(`/categories/user/${userId}`, "GET");
    return categories;
  } catch (error) {
    throw error;
  }
};

const addCategory = async (payload: Record<string, unknown>) => {
  try {
    const category = await fetcher("/categories", "POST", payload);
    return category;
  } catch (error) {
    throw error;
  }
};

const updateCategory = async (payload: Record<string, unknown>) => {
  try {
    const category = await fetcher(`/categories/${payload.id}`, "PUT", payload);
    return category;
  } catch (error) {
    throw error;
  }
};

const deleteCategory = async (id: number) => {
  try {
    const category = await fetcher(`/categories/${id}`, "DELETE");
    return category;
  } catch (error) {
    throw error;
  }
};

export { getCategoriesByUserId, addCategory, updateCategory, deleteCategory };
