export type Category = {
  id: number;
  userId: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  Task: Task[];
};

export type Status = "PENDING" | "STARTED" | "DONE";
export type Priority = "MINOR" | "MODERATE" | "URGENT";

export type Task = {
  id: number;
  categoryId: number;
  title: string;
  status: Status;
  priority: Priority;
  dueTime: string;
  createdAt: string;
  updatedAt: string;
};
