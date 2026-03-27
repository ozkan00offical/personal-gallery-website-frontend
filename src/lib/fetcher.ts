export const fetcher = async <T>(
  endpoint: string, 
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET", 
  body?: unknown
): Promise<T> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Fetch error (${res.status}): ${errorText}`);
  }

  return res.json() as Promise<T>;
};
