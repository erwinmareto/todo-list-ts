import { getCookie } from "cookies-next";

type methods = "GET" | "POST" | "PUT" | "DELETE";
interface Request {
    method: methods;
    headers: {
        authorization: string;
        "Content-Type"?: string;
    };
    cache?: RequestCache;
    body?: string;
}

const fetcher = async (url: string, method: methods, reqData: Record<string, unknown>) => {
  const finalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${url}`;
  const request: Request =
    method === "GET"
      ? {
          method,
          headers: { authorization: `Bearer ${getCookie("token")}` },
          cache: "no-store",
        }
      : {
          method,
          headers: {
            authorization: `Bearer ${getCookie("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reqData),
        };

  try {
    const response = await fetch(finalUrl, request);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export { fetcher };
