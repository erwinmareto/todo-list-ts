import { fetcher } from "@/lib/fetcher";

const addTask = async (payload: Record<string, unknown>) => {
  try {
    const task = await fetcher("/tasks", "POST", payload);
    return task;
  } catch (error) {
    throw error;
  }
};

const updateTask = async (payload: Record<string, unknown>) => {
  try {
    const task = await fetcher(`/tasks/${payload.id}`, "PUT", payload);
    return task;
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (id: number) => {
  try {
    const task = await fetcher(`/tasks/${id}`, "DELETE");
    return task;
  } catch (error) {
    throw error;
  }
};

export { addTask, updateTask, deleteTask };
