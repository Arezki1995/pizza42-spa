import { apiFetch } from "./apiClient";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function createOrder(order, accessToken) {
  return apiFetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(order),
  });
}

export function fetchMyOrders(accessToken) {
  return apiFetch(`${API_BASE_URL}/orders`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  });
}
