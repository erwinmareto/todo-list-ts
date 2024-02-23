export type CategoryPayload = {
    userId: number;
    title: string;
}

export type CategoryFormProps = {
    close: () => void;
    prevCategory?: Category;
}