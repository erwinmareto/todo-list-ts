type Category = {
  id: number;
  userId: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  Task: Task[];
};

type Status = "PENDING" | "STARTED" | "DONE";
type Priority = "MINOR" | "MODERATE" | "URGENT";

type Task = {
  id: number;
  categoryId: number;
  title: string;
  status: Status;
  priority: Priority;
  dueTime: string;
  createdAt: string;
  updatedAt: string;
};
