import { Category } from "@/components/pages/Todos/types";

export type CategoryPayload = {
    userId: number;
    title: string;
}

export type CategoryFormProps = {
    close: () => void;
    prevCategory?: Category;
}