const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    console.log(response);
    throw new Error(`[API ERROR] status:"${response.status}" statusText:"${response.statusText}"`);
  }

  return response.json();
}
