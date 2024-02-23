import { Priority, Status, Task } from "@/components/pages/Todos/types";

export type TaskPayload = {
  categoryId: number;
  title: string;
  status: Status;
  priority: Priority;
  dueTime: string;
};

export type TaskFormProps = {
  close: () => void;
  categoryId: number;
  prevTask?: Task;
}