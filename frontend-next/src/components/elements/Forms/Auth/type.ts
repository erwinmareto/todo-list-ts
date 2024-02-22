export interface AuthFormProps {
  authType: "register" | "login";
}

export type AuthPayload = {
  username: string;
  password: string;
}
